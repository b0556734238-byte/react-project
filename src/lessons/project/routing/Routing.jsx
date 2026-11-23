import { Route, Routes } from "react-router-dom";
// ייבוא הקומפוננטות הראשיות (נבנה אותן בהמשך)


// import { SendRequest } from "../components/SendRequest";
import { Home } from "../Home";
import { Login } from "../Login";
import { Register } from "../Register";
import { ViewStatus } from "../ViewStatus";
import { ViewRequests } from "../ViewRequests";
import { SendRequestPage } from "../SendRequestPage";
// import { RequestDetails } from "../components/RequestDetails";

// ייבוא קומפוננטות הילדים של טופס הגשת הבקשה
// import { PersonalForm } from "../components/requestSteps/PersonalForm";
// import { FamilyForm } from "../components/requestSteps/FamilyForm";
// import { CourseForm } from "../components/requestSteps/CourseForm";
// import { BankForm } from "../components/requestSteps/BankForm";
// import { Verify } from "../components/requestSteps/Verify";
// import { Apply } from "../components/requestSteps/Apply";

export const Routing = () => {
    return <>
        <Routes>
            {/* ניתוב ברירת מחדל - דף הבית */}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
<Route path="SendRequest/*" element={<SendRequestPage></SendRequestPage>}></Route>
            {/* כניסה */}
            <Route path="login" element={<Login></Login>}></Route>
               {/* כ והרשמה */}
            <Route path="register" element={<Register></Register>}></Route>

            {/* הגשת בקשה - קומפוננטת אב המכילה ניתובי ילדים (שלבי הטופס) */}
{/*           
            <Route path="send-request" element={<SendRequest></SendRequest>}>
            {/*   פרטים אישיים */}
                {/* <Route path="personal" element={<PersonalForm></PersonalForm>}></Route>
               {/* משפחה */}
                {/* <Route path="family" element={<FamilyForm></FamilyForm>}></Route> */}
               {/* פרטי הלימודים */}
                {/* <Route path="course" element={<CourseForm></CourseForm>}></Route> */}
               {/* פרטי חשבון בנק */}
                {/* <Route path="bank" element={<BankForm></BankForm>}></Route> */}
               {/* אימות */}
                {/* <Route path="verify" element={<Verify></Verify>}></Route> */}
               {/* הגשה */}
                {/* <Route path="apply" element={<Apply></Apply>}></Route>*/} 
            {/* </Route>  */} 

            {/* צפייה בסטטוס (עבור הסטודנט) */}
            <Route path="ViewStatus" element={<ViewStatus></ViewStatus>}></Route>

            {/* הצגת כל הבקשות (עבור המנהל) */}
            <Route path="ViewRequests" element={<ViewRequests></ViewRequests>}></Route>

            {/* פרטי בקשה ספציפית לפי קוד בקשה (פרמטר בניתוב) */}
            {/* <Route path="request-details/:id" element={<RequestDetails></RequestDetails>}></Route> */}

            {/* ניתוב לכל כתובת שגויה מחזיר לדף הבית */}
            <Route path="*" element={<Home></Home>}></Route>
        </Routes>
    </>
}