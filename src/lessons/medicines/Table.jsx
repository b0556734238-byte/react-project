

import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import "./style.css";
export const Table = () => {
    const navigate = useNavigate()
    const list = useSelector(state => state.mediche)
    return (
        //מעבר על הstateעיuseSelector
        <div >
            <h1>טבלת תרופות שבועית</h1>
            {list && list.map((dayItem, index) => (
                <div key={index} >
                    {/* //לעבור ליום מסוים ולראות מה יש באותו יום */}
                    <h3 onClick={() => { navigate('/Day/', { state: dayItem }) }}>{dayItem.name}</h3>
                    {dayItem.medicines && dayItem.medicines.length > 0 ? (
                        dayItem.medicines.map((med, idx) => (
                            <div key={idx}>
                                <p>שם התרופה: {med.name}</p>
                                <p>כמות: {med.amount}</p>
                            </div>
                        ))
                    ) : (
                        <p>אין תרופות ליום זה</p>
                    )}
                </div>
            ))}
        </div>
    )
}

