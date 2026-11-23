import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { remove } from "./redax/medicheSlice"
export const Remove = () => {
    const { med, name } = useLocation().state ?? {}
    //שליפת נתונים שנשלחו מעמוד date
    let oneDay = 1

    const a = useDispatch()
    console.log(name)
    const navigate = useNavigate()

    return <>
        <h1>האם למחוק מכל הימים או רק מהיום הנוכחי??</h1>
        <div>
            <button onClick={() => {
                //מחיקה מיום מכל הימים
                navigate('/Table')
                a(remove(

                    {

                        med: med, name: name
                    }
                )
                )
            }}>למחוק מכל הימים</button>
            <button onClick={() => {
                navigate('/Table')

                a(remove(
                    {
                        //מחיקה מיום נוכחי
                        //הוספת המשתנה שיודע שזה יום נוכחי

                        med: med, name: name, oneDay: oneDay,
                    }
                )
                )
            }}>  יום נוכחי</button>

            <button onClick={() => {
                navigate('/', {
                })
            }}> ביטול
            </button>
        </div>

    </>
}