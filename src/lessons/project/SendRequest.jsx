import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from './redux/requestSlice';
// export const Form = (props) => {

//   const { name } = props

//   // בדוגמה זו שלחנו כילד קומפוננטה בין התגיות
//   console.log(props);


//   return <>
//     <div className="form">
//       <h2>{name}</h2>
//       {props.children}
//     </div>
//   </>
// }
export const SendRequest = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const childrenArray = React.Children.toArray(props.children);
    const count = childrenArray.length;

    const handleNext = () => {
        if (currentIndex < count - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            dispatch(add());
            navigate('/ViewStatus');
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
  const indexes = []
  for (let i = 0; i < count; i++) {
    indexes[i] = i + 1
  }
    return <>
        <div className="form">
            <h2>הגשת בקשה למענק - שלב {currentIndex + 1} מתוך {count}</h2>
             {indexes.map(x => <button onClick={() => setCurrentIndex(x - 1)}>{x}</button>)}
            {/* הצגת השלב הנוכחי בלבד */}
            {childrenArray[currentIndex]}

            <div style={{ marginTop: '20px' }}>
                <button type="button" disabled={currentIndex === 0} onClick={handlePrev}>
                    &lt;&lt; הקודם
                </button>
                <button type="button" onClick={handleNext} style={{ margin: '0 10px' }}>
                    {currentIndex === count - 1 ? 'שליחת בקשה' : 'הבא >>'}
                    
                </button>
            </div>
        </div>
    </>;
}