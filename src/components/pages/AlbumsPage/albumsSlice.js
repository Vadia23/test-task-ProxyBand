import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const initialState = {
    albums: [],
    loadingStatus: 'idle'
}

export const fetchAlbums = createAsyncThunk(
    'albums/fetchAlbums',
    (id) => {
        const {request} = useHttp();
        return request(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    }
)

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                        state.albums = action.payload;
                        state.loadingStatus = 'idle';
            })
            .addCase(fetchAlbums.rejected, state => {state.loadingStatus = 'error'})
            .addDefaultCase(() => {})
    }

});

const {reducer} = albumsSlice;

export default reducer;

