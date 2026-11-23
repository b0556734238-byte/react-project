
import { Provider } from "react-redux"
import store from "./redux/store"
import { BrowserRouter } from "react-router-dom"
import { Routing } from "./routing/Routing"
import { Nav } from "./routing/Nav" // אם תרצי שהתפריט יופיע קבוע בכל העמודים

export const Main = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/* התפריט הראשי יכול לשבת כאן כדי שיופיע בכל הדפים */}
                <Nav />
                {/* קומפוננטת הניתובים תטען את העמוד המתאים לפי הכתובת בשורת הכתובות */}
                <Routing />
            </BrowserRouter>
    
       </Provider>
    )
}