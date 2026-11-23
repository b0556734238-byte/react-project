
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add, setCurrent } from './redux/userSlice';

export const Register = () => {
    // הגדרת סטייט מרכזי המכיל אובייקט עם כל שדות הטופס יחד
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // הוספת המשתמש לרידקס והגדרתו כמשתמש נוכחי
        dispatch(add(formData));
        dispatch(setCurrent(formData));
        navigate('/');
    };
console.log(formData)
    return (
        <div>
            <h3>הרשמה למערכת</h3>
            <form onSubmit={handleRegister}>
                <div>
                    <label>תעודת זהות: </label>
                    <input 
                        type="text" 
                        value={formData.id} 
                        onChange={(e) => setFormData({ ...formData, id: e.target.value })} 
                        required 
                    />
                </div>
                <div>
                    <label>שם פרטי: </label>
                    <input 
                        type="text" 
                        value={formData.firstName} 
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                        required 
                    />
                </div>
                <div>
                    <label>שם משפחה: </label>
                    <input 
                        type="text" 
                        value={formData.lastName} 
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                        required 
                    />
                </div>
                <div>
                    <label>סיסמה: </label>
                    <input 
                        type="password" 
                        value={formData.password} 
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                        required 
                    />
                </div>
                <button type="submit">הירשם</button>
            </form>
        </div>
    );
};