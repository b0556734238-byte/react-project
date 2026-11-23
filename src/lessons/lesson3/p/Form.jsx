
import { useState } from "react";
export const Form = (setShow,details,setDetails) => {
    return <>   
            <label htmlFor="AD">שם היוצר:</label><br></br>
        <input id="AD" placeholder="שם היוצר"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}>
        </input><br></br><br></br>
       <label htmlFor="TC">צבע ימים:</label><br></br>
        <input id="TC" type="color"
            onChange={(e) => setDetails({ ...details, dayColor: e.target.value })}></input>
        <label htmlFor="TC">צבע אותיות:</label><br></br>
        <input id="TC" type="color"
            onChange={(e) => setDetails({ ...details, textColor: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="BC">צבע מסגרת:</label><br></br>
        <input id="BC" type="color"
            onChange={(e) => setDetails({ ...details, borderColor: e.target.value })}>
        </input><br></br><br></br>
    <button onClick={()=>{setShow(false)}}>יצירת הלוח</button>
    </>
}