import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, fetchPost } from "./timelineAPI";

// create timeline slice
export const timelineSlice = createSlice({
    name: "timeline",
    initialState: {
        posts: [],
        status: "idle", /* loading | successed | failed */
        error: null,
        message: null
    },
    reducers: {
        makeLove: {
            reducer: (state, { type, payload }) => {
                state.posts[state.posts.findIndex((data) => data.id === payload.id)].reactions.love += 1;
            },
            prepare: (id, name, job) => {
                return {
                    payload: {
                        id,
                        name,
                        job
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state, { type, payload }) => {
                state.status = "loading";
            })
            .addCase(fetchPost.fulfilled, (state, { type, payload }) => {
                state.status = "successed";
                state.posts = payload;
                state.message = "All posts loaded";
            })
            .addCase(fetchPost.rejected, (state, { type, payload }) => {
                state.status = "failed";
                state.message = "Data loading failed";
            })
            .addCase(createPost.pending, (state, { type, payload }) => {
                state.status = "loading";
            })
            .addCase(createPost.fulfilled, (state, { type, payload }) => {
                state.status = "successed";
                state.posts.push(payload);
                state.message = "Post created successful";
            })
            .addCase(createPost.rejected, (state, { type, payload }) => {
                state.status = "failed";
                state.message = "Post created failed";
            })
            .addCase(deletePost.fulfilled, (state, { type, payload }) => {
                state.status = "successed";
                state.message = "Post deleted successful";
                state.posts = state.posts.filter((data) => data.id !== payload);
            });
    }
});

export const getAllPost = (state) => state.timeline.posts;

// export 
export const { makeLove } = timelineSlice.actions;

export default timelineSlice.reducer;