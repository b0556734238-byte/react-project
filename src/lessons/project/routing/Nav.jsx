import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export const Nav = () => {
        const currentUser = useSelector(state => state.users.current) || {};

const isManegger =currentUser.firstName=='מנהל'

    return (
        <nav>
            <NavLink to="/">דף הבית</NavLink> |{' '}
            <NavLink to="/login">כניסה</NavLink> |{' '}
            {/* <NavLink to="/register">הרשמה</NavLink> |{' '} */}
            <NavLink to="/SendRequest/personal">הגשת בקשה</NavLink> |{' '}
            <NavLink to="/ViewStatus">צפייה בסטטוס</NavLink> {' '}
      {  isManegger&&   '|' &&<NavLink to="/ViewRequests">הצגת הבקשות</NavLink>}
        </nav>
    );
};