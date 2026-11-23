 import { useState } from "react";
export const Target = ({ setCardDetails, cardDetails, types}) => {
    let arr = JSON.parse(localStorage.getItem('calander'))

 //const [Monthx, setMonth] = useState()
    // const send = (e) => {
    //     e.preventDefault();
    //     const details = {
    //         addressed: e.target[0].value,
    //         blessing: e.target[1].value,
    //         semiText: e.target[2].value,
    //         addressee: e.target[3].value
    //     }
    //     setCardDetails(details)
    // }


const {type,anther,text,month, day}=bordDetails
// const [stutus, setStutus] = useState({})
// const [text, setText] = useState({})

    return <>
        {/* <form onSubmit={send}>

        </form> */}

        <label htmlFor="T">סוג האירוע:</label><br></br>
        <select onChange={(e) => setbordDetails({ ...bordDetails, type: e.target.value })}>
            {types.map((x, i) => <option key={i} value={x.name}>{x.text}</option>)}
        </select>
        <br></br><br></br>
        <label htmlFor="AD">במידה ובחרת אחר  השלימי כאן איזה אירוע</label><br></br>
        <input id="AD" placeholder="סוג האירוע"
            onChange={(e) => setbordDetails({ ...bordDetails, anther: e.target.value })}>
        </input><br></br><br></br>
       
        <label htmlFor="ST">טקסט נוסף:</label><br></br>
        <input id="ST" placeholder="הכנס טקסט נוסף - לא חובה"
            onChange={(e) => setbordDetails({...bordDetails, text: e.target.value })}>
        </input><br></br><br></br>
     <label>בחר חודש:</label>
        <select onChange={e => setbordDetails({...bordDetails, month: e.target.value })}>
            <option disabled selected>בחר חודש</option>
            { arr.months.map((c, i) =>  <option   key={i}>{c}</option>)}
   
        </select>  
          <label>בחריום:</label>
        <select onChange={e => setbordDetails({...bordDetails, day: e.target.value })}>
       
                    
        </select>
      <select 
    value={bordDetails.day} 
    onChange={e => setbordDetails({ ...bordDetails, day: e.target.value })}
>
    <option disabled>בחר יום</option>
    {bordDetails.month && arr[bordDetails.month]?.map((dayNum, i) => (
        <option key={i} value={dayNum}>{dayNum}</option>
    ))}
  { arr.months[bordDetails.month].map((c,m) => <option></option>)} 

</select>
    </>
}