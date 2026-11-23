import { createSlice } from "@reduxjs/toolkit"
//ערך ריק – list


const state = [
    {
        list: [],
        count: 0,
        current: {}
    }


]



const requestSlice = createSlice({
    name: 'requestSlice',
    initialState: state,
    reducers: {

        //פונקציה הוספה
        add: (state, action) => {
            //action.payload-תרופה 
            //מערך של ימים מסומנים או כל הימים
            //       console.log(action.payload.days)
            // let j=0
            //       for (let i = 0; i < state.length; i++) {
            //         //עובר על המערך של הstate
            //         if (action.payload.days[j]== i) {
            //           //בודק האם היום שמסונן שווה לi
            //         state[i].medicines.push(action.payload.mediche)
            //         // stateאם כן מכניס ל
            //         console.log(state[i].medicines)
            //         j++
            //         }
            //       }



            //     }

            //     , updateAmount: (state, action) => {
            //       const { day, name, amount } = action.payload;

            //       // action.payload = שם מוצר, כמות חדשה
            //       if (action.payload >= state.length) return;
            //       // let day2=state.find(x=>x.name==action.payload.name)
            //       let d = 0
            //       for (let index = 0; index < state.length; index++) {
            //         if (state[index].name == action.payload.name) {
            //           d = index
            //       //מוצא את הים שאותו הוא צריך לעדכן כמות
            //         }

            //       }

            //       console.log(d);
            //       console.log(action.payload.amount);
            //       state[d].medicines[action.payload.i].amount = action.payload.amount
            // //מעדכן כמות

            //     },
            //     remove: (state, action) => {
            //       // action.payload//שם היום ושם התרופה
            //      // action.payload.oneDay-יום נוכחי

            //      let d
            //             let a=0

            //       console.log(action.payload.name)
            //       if (action.payload.oneDay == 1) {
            // //האם יום נוכחי
            //         for (let index = 0; index < state.length; index++) {
            //           if (state[index].name == action.payload.name) {
            //             d = index
            //                   //מוצא את הים שאותו הוא צריך למחוק 

            //           }
            //         }
            //         for (let index = 0; index < state[d].medicines.length; index++) {
            //           if (state[d].medicines[index].name == action.payload.med) {
            //           state[d].medicines.splice(index, 1)
            //             //מוחק את היום
            //           }
            //         }
            //       }
            //       else {
            //         //כל הימים שהתרופה נמצאת למחוק אותה
            //         for (let i = 0; i < state.length; i++) {
            //             for (let index = 0; index <  state[i].medicines.length; index++) {
            //               if (state[i].medicines[index].name == action.payload.med) {
            //                 state[i].medicines.splice(index, 1)
            //               }
            //             }
            //           }
            //         }
        }

    }
})


// ייצוא:
// ייצוא ברירת מחדל של הרדיוסר
export default requestSlice.reducer;
// ייצוא של הפעולות
export const { add, updateAmount, remove } = requestSlice.actions;