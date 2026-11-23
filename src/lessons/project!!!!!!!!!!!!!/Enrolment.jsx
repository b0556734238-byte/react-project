import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { add,setCurrent} from "./redax/userSlice"
import { useDispatch } from "react-redux"

export const Enrolment = () => {
     const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user, setUser] = useState({})
    const send = () => {
        
        dispatch(add(
            {
               user
            }
        ))
        
dispatch(setCurrent(user))    }
    return <>
        <h1>כמה דקות ומסימים</h1>
        <p>הרשמה לקבלת מילגה</p>
        <label > הכנס מספר זהות:</label><br />
        <input type="text"  placeholder="input id"
            onChange={(e) => setUser({ ...user, id: e.target.value })}>
        </input ><br></br><br></br>
        <label > הכנס  שם פרטי:</label><br />
        <input type="text" placeholder="input name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}>
        </input ><br></br><br></br>
        <label > הכנס  שם משפחה:</label><br />
        <input type="text"  placeholder="input family"
         onChange={(e) => setUser({ ...user, famliy: e.target.value })}>
        </input ><br></br><br></br>
        <label > הכנס  קוד:</label><br />
        <input type="number"  placeholder="input code"
         onChange={(e) => setUser({ ...user, code: e.target.value })}>
        </input ><br></br><br></br>
         <button onClick={() => {
            { send() }
        navigate('/Home', {
            })
        }}>send
        </button>
    </>
}