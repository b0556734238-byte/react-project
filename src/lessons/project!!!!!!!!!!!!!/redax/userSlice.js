import { createSlice } from "@reduxjs/toolkit"
//לכל משתמש: ת.ז, שם פרטי, שם משפחה, סיסמה
const state = {
    list: [
       {
        id: '218434512',
        name: 'רות שפיגל',
        famliy: 'כהן',
        password: 1111
      },
      {
        id: '21662742',
        name: 'בת שבע שפיגל',
        famliy: 'כהן',
        password: 1234
      },
         {
        id: '1',
        name: ' מנהל ',
        famliy: 'כהן',
        password: 1234
      }


    ],
    current: {}
}

// add - ש (בדיקה שת.ז לא קיימת במערך) הוספת משתמ(action.payload = אובייקט שיכיל את המשתמש החדש)


const userSlice = createSlice({
  name: 'useres',
  initialState: state,
  reducers: {

    //פונקציה הוספה
    add: (state, action) => {
    state.list.push(action.payload)

    },
    setCurrent: (state, action) => {      
    state.current=action.payload
    }
  }
})


// ייצוא:
// ייצוא ברירת מחדל של הרדיוסר
export default userSlice.reducer;
// ייצוא של הפעולות
export const { add, setCurrent } = userSlice.actions;