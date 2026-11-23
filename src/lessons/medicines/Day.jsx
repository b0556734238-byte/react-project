import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { remove } from "./redax/medicheSlice"
import { useState } from "react"
import { Outlet } from "react-router-dom"
export const Day = () => {


const { name, medicines = [] } = useLocation().state ?? {}
    const dis = useDispatch()
    const navigate = useNavigate()

    const send = (idx,name, med) => {

 { 
    //לשלוח משתנים לעמוד המחיקה
    navigate('Remove',{ state:{med: med,name:name ,idx:idx}}
       
    )
}
 
};
    return <>
    {/* // בשביל קופננטה של אבא ובן */}
   <Outlet></Outlet>
        <h1>{name}</h1>
        {medicines.map((med, idx) => (
            <div key={idx}>
                <p>שם התרופה: {med.name}</p>
                <p>כמות: {med.amount}</p>
                <button onClick={() => {
                    navigate('/AddM', {
                        //לשלוח להוספת תרופה
                        state: { up: false, idx: idx, name: name } })}}>update amount
                        </button>
                <button onClick={() => send(idx,name, med.name)}>remove</button>

            </div>
        ))}
     
    </>


}
