// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { bank } from '../redux/requestSlice';

// export const BankForm = () => {
//     const dispatch = useDispatch();

//     const [bankData, setBankData] = useState({
//         accountHolder: '',
//         holderId: '',
//         bankName: '',
//         branchNumber: '',
//         accountNumber: ''
//     });
// console.log(bankData)
//     return <>
//         <div>
//             <h3>פרטי חשבון בנק</h3>
//             <div>
//                 <label>שם בעל החשבון: </label>
//                 <input 
//                     type="text" 
//                     value={bankData.accountHolder}
//                     onChange={(e) => setBankData({ ...bankData, accountHolder: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>תעודת זהות של בעל החשבון: </label>
//                 <input 
//                     type="text" 
//                     value={bankData.holderId}
//                     onChange={(e) => setBankData({ ...bankData, holderId: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>שם בנק: </label>
//                 <input 
//                     type="text" 
//                     value={bankData.bankName}
//                     onChange={(e) => setBankData({ ...bankData, bankName: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>מספר סניף: </label>
//                 <input 
//                     type="number"
//                     value={bankData.branchNumber}
//                     onChange={(e) => setBankData({ ...bankData, branchNumber: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>מספר חשבון: </label>
//                 <input 
//                     type="text" 
//                     value={bankData.accountNumber}
//                     onChange={(e) => setBankData({ ...bankData, accountNumber: e.target.value })} 
//                     required 
//                 />
//             </div>
//         </div>
//     </>;
// };
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bank } from '../redux/requestSlice';

export const BankForm = () => {
    const dispatch = useDispatch();
    
    // שליפת הבקשה הנוכחית מהרידקס לצורך מילוי אוטומטי אם כבר מולא
    const currentReq = useSelector(state => state.request.current.bank) || {};

    // אתחול הסטייט מהרידקס (אם ריק - יתחיל ריק, אם מלא - יתמלא אוטומטית)
    const [bankData, setBankData] = useState({
        accountHolder: currentReq.accountHolder || '',
        holderId: currentReq.holderId || '',
        bankName: currentReq.bankName || '',
        branchNumber: currentReq.branchNumber || '',
        accountNumber: currentReq.accountNumber || ''
    });

    // שמירת מצביע לנתונים העדכניים כדי שפונקציית ההריסה תכיר אותם
    const dataRef = useRef(bankData);
    dataRef.current = bankData;

    // שמירה ברידקס בעת הריסה (מעבר שלב) - בדיוק כמו שלמדתם בכיתה
    useEffect(() => {
        return () => {
            dispatch(bank(dataRef.current));
        };
    }, []);

    return <>
        <div>
            <h3>פרטי חשבון בנק</h3>
            <div>
                <label>שם בעל החשבון: </label>
                <input 
                    type="text" 
                    value={bankData.accountHolder}
                    onChange={(e) => setBankData({ ...bankData, accountHolder: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>תעודת זהות של בעל החשבון: </label>
                <input 
                    type="text" 
                    value={bankData.holderId}
                    onChange={(e) => setBankData({ ...bankData, holderId: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>שם בנק: </label>
                <input 
                    type="text" 
                    value={bankData.bankName}
                    onChange={(e) => setBankData({ ...bankData, bankName: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>מספר סניף: </label>
                <input 
                    type="number"
                    value={bankData.branchNumber}
                    onChange={(e) => setBankData({ ...bankData, branchNumber: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>מספר חשבון: </label>
                <input 
                    type="text" 
                    value={bankData.accountNumber}
                    onChange={(e) => setBankData({ ...bankData, accountNumber: e.target.value })} 
                    required 
                />
            </div>
        </div>
    </>;
};