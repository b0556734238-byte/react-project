import { NavLink } from "react-router-dom"

export const Home = () => {
    return <>
        <div className="nav">
            <NavLink className="link" to="/">תפריט</NavLink>
            {/* //ברירת מחדל עמוד הבית */}
            <NavLink className="link" to="/AddM">הוספת תרופה</NavLink>
            <NavLink className="link" to="/Table">טבלה שבועית</NavLink>
        </div>
         

    </>
}