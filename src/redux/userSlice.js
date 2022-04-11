import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "joel",
        email: "joel@gmail.com"
    },

    reducers: {
        update: ()
    }

});