
import { configureStore } from "@reduxjs/toolkit";
import  medicheReducer from './medicheSlice'

const store = configureStore({
    reducer: {
        mediche: medicheReducer
    }
})

export default store