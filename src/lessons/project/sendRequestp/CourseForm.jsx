// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { course } from '../redux/requestSlice';

// export const CourseForm = () => {
//     const dispatch = useDispatch();

//     const [courseData, setCourseData] = useState({
//         megama: '',
//         money: '',
//         years: ''
//     });

//     return <>
//         <div>
//             <h3>פרטי הלימודים</h3>
//             <div>
//                 <label>מגמה: </label>
//                 <input 
//                     type="text" 
//                     value={courseData.megama}
//                     onChange={(e) => setCourseData({ ...courseData, megama: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>שכר לימוד שנתי: </label>
//                 <input 
//                     type="number" 
//                     value={courseData.money}
//                     onChange={(e) => setCourseData({ ...courseData, money: e.target.value })} 
//                     required 
//                 />
//             </div>
//             <div>
//                 <label>שנות לימוד: </label>
//                 <input 
//                     type="number" 
//                     value={courseData.years}
//                     onChange={(e) => setCourseData({ ...courseData, years: e.target.value })} 
//                     required 
//                 />
//             </div>
//         </div>
//     </>
// };
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { course } from '../redux/requestSlice';

export const CourseForm = () => {
    const dispatch = useDispatch();
    const currentReq = useSelector(state => state.request.current.course) || {};

    const [courseData, setCourseData] = useState({
        megama: currentReq.megama || '',
        money: currentReq.money || '',
        years: currentReq.years || ''
    });

    const dataRef = useRef(courseData);
    dataRef.current = courseData;

    useEffect(() => {
        return () => {
            dispatch(course(dataRef.current));
        };
    }, []);

    return <>
        <div>
            <h3>פרטי הלימודים</h3>
            <div>
                <label>מגמה: </label>
                <input 
                    type="text" 
                    value={courseData.megama}
                    onChange={(e) => setCourseData({ ...courseData, megama: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>שכר לימוד שנתי: </label>
                <input 
                    type="number" 
                    value={courseData.money}
                    onChange={(e) => setCourseData({ ...courseData, money: e.target.value })} 
                    required 
                />
            </div>
            <div>
                <label>שנות לימוד: </label>
                <input 
                    type="number" 
                    value={courseData.years}
                    onChange={(e) => setCourseData({ ...courseData, years: e.target.value })} 
                    required 
                />
            </div>
        </div>
    </>;
};