import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    count: 0,
    current: {
        personal: {},
        family: {},
        course: {},
        bank: {}

    }
};

const requestSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        personal: (state, action) => {
            state.current.personal = action.payload;
        },
        family: (state, action) => {
            state.current.family = action.payload;
        },
        course: (state, action) => {
            state.current.course = action.payload;
        },
        bank: (state, action) => {
            state.current.bank = action.payload;
        },
        add: (state) => {
            debugger

            state.count += 1;
            const newRequest = {

                ...state.current,
                requestId: state.count,          // מספר סידורי לבקשה
                idNum: state.current.personal.id || "",   // תעודת הזהות של המשתמש מתוך ה-current
                status: "waiting"
            };

            state.list.push(newRequest);
            console.log(state.list[0].personal.id);

            state.current = {
                personal: {},
                family: {},
                course: {},
                bank: {}
            };

        },

        allow: (state, action) => {
            const request = state.list.find(req => req.id === action.payload);
            if (request) {
                request.status = "allow";
            }
        },
        reject: (state, action) => {
            const request = state.list.find(req => req.id === action.payload);
            if (request) {
                request.status = "reject";
            }
        }
    }
});

export const selectNotAllowed = (state) => {
    return state.requests.list.filter(req => req.status !== "allow");
};

export const { personal, family, course, bank, add, allow, reject } = requestSlice.actions;
export default requestSlice.reducer;