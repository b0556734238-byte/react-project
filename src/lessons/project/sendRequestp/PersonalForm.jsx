// import React from 'react';
// import { useSelector } from 'react-redux';

// export const PersonalForm = () => {
//     const currentUser = useSelector(state => state.users.current);

//     return (
//         <div>
//             <h3>פרטים אישיים</h3>
//             <p>תעודת זהות: {currentUser?.id}</p>
//             <p>שם פרטי: {currentUser?.firstName}</p>
//             <p>שם משפחה: {currentUser?.lastName}</p>
//             <p style={{ color: 'gray', fontSize: 'small' }}>* הפרטים האישיים מעודכנים מהמערכת ולא ניתן לשנותם כאן.</p>
//         </div>
//     );
// };
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { personal } from '../redux/requestSlice';

export const PersonalForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.current) || {};
    const currentReq = useSelector(state => state.request.current.personal) || {};

    const [personalData, setPersonalData] = useState({
        id: currentUser.id || '',
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        birthDate: currentReq.birthDate || '',
        address: currentReq.address || '',
        phone: currentReq.phone || ''
    });

    const dataRef = useRef(personalData);
    dataRef.current = personalData;

    useEffect(() => {
        return () => {
            dispatch(personal(dataRef.current));
        };
    }, []);

    return (
        <div>
            <h3>פרטים אישיים</h3>
            <p>תעודת זהות: {currentUser.id}</p>
            <p>שם פרטי: {currentUser.firstName}</p>
            <p>שם משפחה: {currentUser.lastName}</p>
            <p style={{ color: 'gray', fontSize: 'small' }}>* הפרטים האישיים מעודכנים מהמערכת ולא ניתן לשנותם כאן.</p>

            <div>
                <label>תאריך לידה: </label>
                <input 
                    type="date" 
                    value={personalData.birthDate}
                    onChange={(e) => setPersonalData({ ...personalData, birthDate: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>כתובת: </label>
                <input 
                    type="text" 
                    value={personalData.address}
                    onChange={(e) => setPersonalData({ ...personalData, address: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>טלפון: </label>
                <input 
                    type="tel" 
                    value={personalData.phone}
                    onChange={(e) => setPersonalData({ ...personalData, phone: e.target.value })} 
                    required 
                />
            </div>
        </div>
    );
};