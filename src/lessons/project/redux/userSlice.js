import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [
        { id: "111111111", firstName: "מנהל", lastName: "המערכת", password: "admin" },
        { id: "222222222", firstName: "ישראל", lastName: "ישראלי", password: "123" }
    ],
    current: null
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, action) => {
       
                state.list.push(action.payload);
           
        },
        setCurrent: (state, action) => {
            state.current = action.payload;
        }
    }
});

export const { add, setCurrent } = userSlice.actions;
export default userSlice.reducer;