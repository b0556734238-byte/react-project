
import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './userSlice'

const store = configureStore({
    reducer: {
        useres: userReducer
    }
})

export default store