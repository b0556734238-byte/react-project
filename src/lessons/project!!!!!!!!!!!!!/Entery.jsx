import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCurrent } from "./redax/userSlice"

export const Entery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const list = useSelector(x => x.useres)
  const [id, setId] = useState("")
//  const foundUser=null
  const checkUsers = (id) => {
    debugger
    // console.log(String(list.list[0].id));
     const foundUser = list.list.find(user => user.id == id );
debugger
    //     for (let i = 0; i < list.list.length; i++) {
    //       console.log(list.list[i].id);
             console.log(foundUser);
    // if (String(list.list[i].id) == String(id)) {   
    if (foundUser) {
      dispatch(setCurrent(foundUser))
      navigate('/Home/')
    }
    else
  navigate('/Enrolment/')
}



return <>
  <p>ברוכים הבראים לקבלת מילגה</p>
  <h3 onClick={() => { navigate('/Enrolment/') }}>אין לך חשבון? צור אותו עכשיו </h3>
  <label > הכנס מספר זהות:</label>
  <input type="text"
    onChange={(e) => setId(e.target.value)} />
  <label > הכנס  קוד:</label>
  <input type="number" />
  <button onClick={() => checkUsers(id)}>אישור</button>
  <button>dfghdfxdzSA</button>
{/* git add .
git commit -m "Update home page"
git push */}

</>
}