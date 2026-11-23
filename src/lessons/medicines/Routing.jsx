
 
import { Route, Routes } from "react-router-dom"
import { AddM } from "./AddM"
import { Table } from "./Table"
import { Day } from "./Day"
import { Home } from "./Home"
import { Index } from "./Index"
import { Remove } from "./Remove"

export const Routing = () => {
    return <>
    
        <Routes>
          
          <Route path="/AddM" element={<AddM ></AddM>} />
          <Route path="Table" element={<Table></Table>} />
            <Route path="/" element={<Index ></Index>} />
            <Route path="Day" element={<Day ></Day>}
            
            >    <Route path="Remove" element={<Remove></Remove>}></Route>  </Route>

         </Routes>
    </>
}