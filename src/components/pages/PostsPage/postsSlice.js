import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const initialState = {
    posts: [],
    loadingStatus: 'idle'
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    (id) => {
        const {request} = useHttp();
        return request(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchPosts.fulfilled, (state, action) => {
                        state.posts = action.payload;
                        state.loadingStatus = 'idle';
            })
            .addCase(fetchPosts.rejected, state => {state.loadingStatus = 'error'})
            .addDefaultCase(() => {})
    }

});

const {reducer} = postsSlice;


export default reducer;
