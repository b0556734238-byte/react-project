
import { useState } from "react";
export const Nachesh = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 1000))
  const [tries, setTries] = useState(0);
  const [messgage, setMessgage] = useState("");
const checkGuess= (userNum)=>{

    if(!userNum && userNum!==0)return;  
    const curentTries=tries+1
    setTries(curentTries)
    if(userNum==num){
      setMessgage(`מספר הניסיונות  שלך הוא:ניצחת!! ${curentTries}`)}
   else if(userNum>num){
      setMessgage("המספר גדול מידי")}
   else {
      setMessgage("המספר קטן מידי")}
      if(curentTries==10)
        setMessgage(`ניכשלת ומספר הוא: ${num}`)
if(tries<10 )
e.target.value=""
}
const newGame= ()=>{
setMessgage("")
setTries(0)
setNum (Math.floor(Math.random() * 1000))
}
    return <>
<h1>{tries}/10</h1>
<h1>{num}</h1>
{messgage && <h1>{messgage}</h1>}
<p></p>
<button onClick={newGame}>התחל משחק חדש</button>
   <input placeholder='input number' onBlur={(e) => checkGuess(+e.target.value)}></input>    
    </>
}