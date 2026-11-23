import { Provider } from "react-redux"
import store from "./redax/store"
import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Home } from "./Home"
import "./style.css";

export const Main = () => {
    return <>

        
 <Provider store={store}>
        <BrowserRouter>
            <Home></Home>
            <Routing></Routing>
        </BrowserRouter>
        </Provider>
    </>
}