import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// create async post
export const fetchPost = createAsyncThunk("timeline/fetchPost", async () => {
    const response = await axios.get('http://localhost:5050/posts')
    return response.data;
});

// create async post
export const createPost = createAsyncThunk("timeline/createPost", async (data) => {
    const response = await axios.post('http://localhost:5050/posts', data)
    return response.data;
});

// delete async post
export const deletePost = createAsyncThunk("timeline/deletePost", async (id) => {
    await axios.delete('http://localhost:5050/posts/'+id)
    return id;
});