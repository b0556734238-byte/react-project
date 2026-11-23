import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setCurrent } from './redux/userSlice';

export const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // שליפת רשימת המשתמשים מהרידקס
    const usersList = useSelector(state => state.users.list);

    const handleLogin = (id,password) => {
        // e.preventDefault();

        // חיפוש המשתמש לפי תעודת זהות וסיסמה
        const foundUser = usersList.find(user => user.id === id && user.password === password);

        if (foundUser) {
            // אם המשתמש קיים - נשמור אותו כמשתמש הנוכחי ברידקס וננתב לדף הבית
            dispatch(setCurrent(foundUser));
            navigate('/');
        } else {
            // אם המשתמש אינו קיים - מעבר ישיר לדף ההרשמה
            navigate('/register');
        }
    };

    return (
        <div>
            <h3>כניסה למערכת</h3>
            {/* <form onSubmit={handleLogin}> */}
                <div>
                    <label>תעודת זהות: </label>
                    <input 
                        type="text" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>סיסמה: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button onClick={() => handleLogin(id,password)}>התחבר</button>
            {/* </form> */}

            {/* <p>
                אין לך חשבון? <Link to="/register">צור אותו עכשיו</Link>
            </p> */}
    
       <p>
               
                <button type="button" onClick={() => navigate('/register')}>
                  אין לך חשבון? צור אותו עכשיו
                </button>
            </p>
        </div>
    );
};