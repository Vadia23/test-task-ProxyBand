import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const initialState = {
    users: [],
    userName: null,
    loadingStatus: 'idle'
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    () => {
        const {request} = useHttp();
        return request('https://jsonplaceholder.typicode.com/users')
    }
)

const dataSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getName: (state, action) => {
            state.userName = action.payload;
        }         
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchUsers.fulfilled, (state, action) => {
                        state.users = action.payload;
                        state.loadingStatus = 'idle';
            })
            .addCase(fetchUsers.rejected, state => {state.loadingStatus = 'error'})
            .addDefaultCase(() => {})
    }

});

const {actions, reducer} = dataSlice;

export default reducer;

export const {
    getName
} = actions;