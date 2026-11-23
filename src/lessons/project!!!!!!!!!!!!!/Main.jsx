import { Provider } from "react-redux"
import store from "./redax/store"
import { BrowserRouter } from "react-router-dom"
import { Routing } from "./routing/Routing"
import { Nav } from "./routing/Nav"

export const Main = () => {
    return <>

 <Provider store={store}>
      <BrowserRouter>
            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>
        </Provider>
     

    </>
}