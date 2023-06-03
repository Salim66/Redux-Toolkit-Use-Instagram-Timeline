import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: () => {}
});

// export 
export const { } = timelineSlice.actions;

export default timelineSlice.reducer;