import { Link, NavLink } from 'react-router-dom'
import './style.css'

// navigation - ניתוב - ניווט
// navbar - תפריט
// מטרת הקומפוננטה - יצירת תפריט אפשרויות למשתמש

export const Nav = () => {
    return <>
        <div >
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="Entery">Entery</NavLink>
            <NavLink className="link" to="application">Application</NavLink>
            <NavLink className="link" to="status">Status</NavLink>
            <NavLink className="link" to="requests">Requests</NavLink>

        </div>
    </>
}