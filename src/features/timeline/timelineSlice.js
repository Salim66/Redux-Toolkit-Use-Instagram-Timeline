import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchPost } from "./timelineAPI";

// create timeline slice
export const timelineSlice = createSlice({
    name: "timeline",
    initialState: {
        posts: [],
        status: "idle", /* loading | successed | failed */
        error: null,
        message: null
    },
    reducers: {},
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
            });
    }
});

export const getAllPost = (state) => state.timeline.posts;

// export 
export const { } = timelineSlice.actions;

export default timelineSlice.reducer;