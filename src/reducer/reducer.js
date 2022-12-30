import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    albums: [],
    userId: null,
    userName: null,
    loadingStatus: 'idle'
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetching: state => {state.loadingStatus = 'loading'},
        fetched: (state, action) => {
            state.data = action.payload;
            state.loadingStatus = 'idle';
        },
        fetchedAlbums: (state, action) => {
            state.albums = action.payload;
            state.loadingStatus = 'idle';
        },
        fetchingError: state => {state.loadingStatus = 'error'},
        getName: (state, action) => {
            state.userName = action.payload;
        },
        getId: (state, action) => {
            state.userId = action.payload
        }
            
    }
});

const {actions, reducer} = dataSlice;

export default reducer;

export const {
    fetching,
    fetched,
    fetchedAlbums,
    fetchingError,
    getName,
    getId
} = actions;