import { useSelector } from "react-redux"
import React, { useState } from 'react'

export const PersonalForm = () => {
  const list = useSelector(x => x.useres)
  const [user, setUser] = useState({})


  return <>
    <div>
      <label>תעודת זהות:</label>
      <span>{list.current.id}</span>
    </div>

    <div>
      <label>שם פרטי:</label>
      <span>{list.current.name}</span>
    </div>

    <div>
      <label>שם משפחה:</label>
      <span>{list.current.famliy}</span>
    </div>
    <label htmlFor="birthDate">תאריך לידה:</label><br />
    <input
      id="birthDate"
      type="date"
      onBlur={(e) => setUser({ ...user, birthDate: e.target.value })}
    /><br /><br />

    <label htmlFor="address">כתובת:</label><br />
    <input
      id="address"
      type="text"
      placeholder="הכנס כתובת"
      onBlur={(e) => setUser({ ...user, address: e.target.value })}
    /><br /><br />

    <label htmlFor="phone">טלפון:</label><br />
    <input
      id="phone"
      type="tel"
      placeholder="הכנס מספר טלפון"
      onBlur={(e) => setUser({ ...user, phone: e.target.value })}
    /><br /><br />

  </>
}
export const FamilyForm = () => {

  const [user, setUser] = useState({})


  return <>



    <label htmlFor="parens">שמות ההורים:</label><br />
    <input
      id="parens"
      type="text"
      placeholder="הכנס שמות ההורים"
      onBlur={(e) => setUser({ ...user, parens: e.target.value })}
    /><br /><br />

    <label htmlFor="childrenCount">כמות ילדים:</label><br />
    <input
      id="childrenCount"
      type="number"
      min="0"
      placeholder="הכנס מספר ילדים"
      onBlur={(e) => setUser({ ...user, childrenCount: Number(e.target.value) })}
    /><br /><br />

    <label htmlFor="siblingsOver19">כמות אחים מעל גיל 19:</label><br />
    <input
      id="siblingsOver19"
      type="number"
      min="19"
      placeholder="הכנס כמות אחים מעל גיל 19"
      onBlur={(e) => setUser({ ...user, siblingsOver19: Number(e.target.value) })}
    /><br /><br />
    <br /><br />

  </>
}
export const CourseForm = () => {

  const [user, setUser] = useState({})


  return <>
    <label htmlFor="track">מגמה / תחום לימודים:</label><br />
    <input
      id="track"
      type="text"
      placeholder="לדוגמה: מדעי המחשב / ראיית חשבון / חינוך"
      onBlur={(e) => setUser({ ...user, track: e.target.value })}
    /><br /><br />

    <label htmlFor="studyYears">שנות לימוד בתוכנית:</label><br />
    <select
      id="studyYears"
      value={user.studyYears}
      onChange={(e) => setUser({ ...user, studyYears: e.target.value })}
    >
      <option value="שנה 1">שנה 1</option>
      <option value="שנה 2">שנה 2</option>
      <option value="שנה 3">שנה 3</option>
      <option value="שנה 4">שנה 4</option>
    </select><br /><br />

    <label htmlFor="annualTuition">שכר לימוד שנתי (בש"ח):</label><br />
    <input
      id="annualTuition"
      type="number"
      min="0"
      placeholder="לדוגמה: 12000"
      onBlur={(e) =>
        setUser({ ...user, annualTuition: Number(e.target.value) })
      }
    /><br /><br />
  </>
}
export const BankForm = () => {

  const [bankDetails, setBankDetails] = useState({})


  return <>
    <label htmlFor="accountHolderName">שם בעל החשבון:</label><br />
    <input
      id="accountHolderName"
      type="text"
      placeholder="הכנס שם בעל החשבון"
      onBlur={(e) =>
        setBankDetails({ ...bankDetails, accountHolderName: e.target.value })
      }
    /><br /><br />

    <label htmlFor="accountHolderId">תעודת זהות של בעל החשבון:</label><br />
    <input
      id="accountHolderId"
      type="text"
      placeholder="הכנס תעודת זהות"
      onBlur={(e) =>
        setBankDetails({ ...bankDetails, accountHolderId: e.target.value })
      }
    /><br /><br />

    <label htmlFor="bankName">שם בנק:</label><br />
    <input
      id="bankName"
      type="text"
      placeholder="הכנס שם בנק"
      onBlur={(e) =>
        setBankDetails({ ...bankDetails, bankName: e.target.value })
      }
    /><br /><br />

    <label htmlFor="branchNumber">מספר סניף:</label><br />
    <input
      id="branchNumber"
      type="text"
      placeholder="הכנס מספר סניף"
      onBlur={(e) =>
        setBankDetails({ ...bankDetails, branchNumber: e.target.value })
      }
    /><br /><br />

    <label htmlFor="accountNumber">מספר חשבון:</label><br />
    <input
      id="accountNumber"
      type="text"
      placeholder="הכנס מספר חשבון"
      onBlur={(e) =>
        setBankDetails({ ...bankDetails, accountNumber: e.target.value })
      }
    /><br /><br />
  </>
}
export const DeclarationForm = () => {
  const [declaration, setDeclaration] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!declaration.isConfirmed) return;
  };

  const handleCancel = () => {
    setDeclaration({});
  };

  return <>
    <form onSubmit={handleSubmit}>
      <input
        id="isConfirmed"
        type="checkbox"
        checked={Boolean(declaration.isConfirmed)}
        onChange={(e) =>
          setDeclaration({ ...declaration, isConfirmed: e.target.checked })
        }
      />
      <label htmlFor="isConfirmed">
        אני מצהיר/ה כי כל הפרטים שמילאתי נכונים ומלאים.
      </label><br /><br />

      <button type="submit" disabled={!declaration.isConfirmed}>
        שליחה
      </button>
      <button type="button" onClick={handleCancel}>
        ביטול
      </button>
    </form>
  </>
}
export const Form = (props) => {

  const { name } = props

  // בדוגמה זו שלחנו כילד קומפוננטה בין התגיות
  console.log(props);


  return <>
    <div className="form">
      <h2>{name}</h2>
      {props.children}
    </div>
  </>
}

export const SendRequest = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const count = React.Children.count(props.children)
  const children = React.Children.toArray(props.children)

  // const { name } = children[currentIndex].props

  const indexes = []
  for (let i = 0; i < count; i++) {
    indexes[i] = i + 1
  }

  return <>
    <div className='carousel' >
             {/* {children.map(x => <button onClick={(i) => setCurrentIndex(x - 1)}>{x.props.name}</button>)} */}
      {indexes.map(x => <button onClick={(i) => setCurrentIndex(x - 1)}>{x}</button>)}

      {/* שהבן קיבל props קומפוננטת האב יכולה לגשת לכל ה */}
      {children[currentIndex]}
      <button disabled={currentIndex == 0} onClick={() => setCurrentIndex(currentIndex - 1)}> &lt;&lt; Previous</button>
      <button disabled={currentIndex == count - 1} onClick={() => setCurrentIndex(currentIndex + 1)}>Next &gt;&gt;</button>
    </div>
  </>
}
export const Application = () => {
  return <>
    <	SendRequest name={'הרשמה לקבלת מילגה'}>
      <Form name={'פרטים אישים'}>
        <PersonalForm name={'פרטים אישים'}></PersonalForm>
      </Form>
      <Form name={'פרטים על משפחה'}>
        <FamilyForm name={'פרטים אישים'}></FamilyForm>
      </Form>
      <Form name={'לימודים'}>
        <CourseForm name={'לימודים'}></CourseForm>
      </Form>
      <Form name={'פרטי בנק'}>
        <BankForm name={'פרטי בנק'}></BankForm>
      </Form>
      <Form name={'סיום'}>
        <DeclarationForm name={'סיום'}></DeclarationForm>
      </Form>
    </SendRequest>



  </>
}