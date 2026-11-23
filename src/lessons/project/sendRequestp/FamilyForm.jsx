// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { family } from '../redux/requestSlice';

// export const FamilyForm = () => {
//     const dispatch = useDispatch();

//     // יצירת סטייט מקומי באובייקט אחד לכל שדות טופס המשפחה
//     const [familyData, setFamilyData] = useState({
//         parents: '',
//         kidsCount: '',
//        brotherOver19: ''
//     });

//     // פונקציה שנקראת כשרוצים לשמור את הנתונים ברידקס (למשל כשעוברים שלב)
//     const handleSave = () => {
//         dispatch(family(familyData));
//     };

//     return (
//         <div>
//             <h3>פרטי משפחה</h3>
//             <div>
//                 <label>שמות ההורים: </label>
//                 <input 
//                     type="text" 
//                     value={familyData.parents}
//                     onChange={(e) => setFamilyData({ ...familyData, parents: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>כמות הילדים: </label>
//                 <input 
//                     type="number" 
//                     value={familyData.kidsCount}
//                     onChange={(e) => setFamilyData({ ...familyData, kidsCount: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>כמות אחים מעל גיל 19: </label>
//                 <input 
//                     type="number" 
//                     value={familyData.brotherOver19}
//                     onChange={(e) => setFamilyData({ ...familyData, brotherOver19: e.target.value })} 
//                     required 
//                 />
//             </div>
//         </div>
//     );
// };
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { family } from '../redux/requestSlice';

export const FamilyForm = () => {
    const dispatch = useDispatch();
    const currentReq = useSelector(state => state.request.current.family) || {};

    const [familyData, setFamilyData] = useState({
        parents: currentReq.parents || '',
        kidsCount: currentReq.kidsCount || '',
        brotherOver19: currentReq.brotherOver19 || ''
    });

    const dataRef = useRef(familyData);
    dataRef.current = familyData;

    useEffect(() => {
        return () => {
            dispatch(family(dataRef.current));
        };
    }, []);

    return (
        <div>
            <h3>פרטי משפחה</h3>
            <div>
                <label>שמות ההורים: </label>
                <input 
                    type="text" 
                    value={familyData.parents}
                    onChange={(e) => setFamilyData({ ...familyData, parents: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>כמות הילדים: </label>
                <input 
                    type="number" 
                    value={familyData.kidsCount}
                    onChange={(e) => setFamilyData({ ...familyData, kidsCount: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>כמות אחים מעל גיל 19: </label>
                <input 
                    type="number" 
                    value={familyData.brotherOver19}
                    onChange={(e) => setFamilyData({ ...familyData, brotherOver19: e.target.value })} 
                    required 
                />
            </div>
        </div>
    );
};