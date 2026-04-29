import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    register: {},
    login: {},
    jwtToken: {},
    userid: null
}

const userReducers = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});
export default userReducers.reducer;