import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import requestReducer from './requestSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        request: requestReducer
    }
});

export default store;