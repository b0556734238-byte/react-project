

import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { Application } from "../Application"
import { Status } from "../Status"
import { Requests } from "../Requests"
import { Entery } from "../Entery"
import { Enrolment } from "../Enrolment"
//() דף הבית, כניסה, הרשמה, הגשת בקשה (יתכן שתכיל כמה ילדים – חלקי הטופס), צפיה בסטטוס, הצגת הבקשות, פרטי בקשה (לפי קוד), ית

export const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home ></Home>} />
            <Route path="Application" element={<Application ></Application>} />
            <Route path="Status" element={<Status></Status>} />
            <Route path="Entery" element={<Entery></Entery>} />
            <Route path="Requests" element={<Requests></Requests>} />
            <Route path="Enrolment" element={<Enrolment></Enrolment>} />
            <Route path="/Home" element={<Home></Home>} />
        </Routes>
    </>
}