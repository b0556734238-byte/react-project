
import React from 'react';
import { useSelector } from 'react-redux';

export const ViewStatus = () => {
    const currentUser = useSelector(state => state.users?.current) || {};
    const requestsList = useSelector(state => state.request?.list) || [];

    if (!currentUser.id) {
        return <div>יש להתחבר למערכת כדי לצפות בסטטוס הבקשה.</div>;
    }

   const userRequests = requestsList.filter(req => req.idNum === currentUser.id);
    const lastRequest = userRequests[userRequests.length - 1];

    if (!lastRequest) {
        return (
            <div>
                <h2>צפייה בסטטוס בקשה</h2>
                <p>טרם נמצאה בקשה פעילה על שמך במערכת.</p>
            </div>
        );
    }

    const renderStatusMessage = (status) => {
        if (status === 'waiting') {
            return <p>הבקשה שלך עדיין ממתינה לבדיקה.</p>;
        } 
        else if (status === 'allow') {
            return <p>הבקשה שלך אושרה !!!</p>;
        } 
        else if (status === 'reject') {
            return (
                <div>
                    <p>מצטערים הבקשה שלך נדחתה.</p>
                    <button onClick={() => alert('פנייה לערעור נפתחה')}>לערעור</button>
                </div>
            );
        } 
        else {
            return <p>סטטוס לא ידוע.</p>;
        }
    };

    return (
        <div>
            <h2>סטטוס הגשת המענק שלך</h2>
           <p>מספר בקשה: {lastRequest.requestId}</p>
            {renderStatusMessage(lastRequest.status)}
        </div>
    );
};