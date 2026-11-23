
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { add, updateAmount } from "./redax/medicheSlice"

export const AddM = () => {
        const navigate = useNavigate()

    //up-משתנה שעוזר לכפתורים להיות לא מאפשרים
    const { up, idx, name } = useLocation().state ?? { up: true }
    const [newAmount, setNewAmount] = useState()
    //לשמור כמות מעודכנת שהמשתמש כתב 

    const [mediche, setMediche] = useState({})
    const [days, setDays] = useState([])


    const dispatch = useDispatch()

    const send = () => {
       

        //האם מדובר בעדכון או בהוספה
        if (!up) {
            dispatch(updateAmount(
                {

                    i: idx, amount: newAmount,
                    name: name
                }
            ))
        }

        console.log({ days });

        dispatch(add(
            {
                mediche, days
            }
        ))
    }
    const chooseDay = (x) => {
        console.log(days);

        if (days == null || !days.find(d => d == x))
            //האם המערך ריק של הימים ריק
            //תןסיף לי את כל המסומנים
            setDays([...days, x])
        else
            //תמחוק כפולים
            setDays(days => days.filter(d => d != x))

    }
    const list = useSelector(state => state.mediche)

    return <>

        <label>בחירת יום</label><br></br>
        {list && list.map((dayItem, index) =>

        (<>
            <label htmlFor="D">{dayItem.name}</label>
            <input type="checkbox" disabled={!up}
                onChange=
                {(e) => chooseDay(index)}></input>

        </>

        ))

        }
        <>
            <label>כל הימים </label><br></br>
            <input htmlFor="8" type="checkbox" onClick={(e) => setDays([0, 1, 2, 3, 4, 5, 6])} /></>
        <label htmlFor="A">שם התרופה:</label><br></br>
        <input id="D" placeholder="input name" disabled={!up}
            onChange={(e) => setMediche({ ...mediche, name: e.target.value })}>
        </input ><br></br><br></br>
        <label htmlFor="A">כמות:</label><br></br>
        <input id="A" placeholder="input amount"
            onChange={(e) =>{setMediche({ ...mediche, amount: +e.target.value } ); setNewAmount(e.target.value)}}>
        </input ><br></br><br></br>
        <button onClick={() => {
            { send() }
            navigate('/Table', {
            })
        }}>send
        </button>


    </>
}

