import { Suspense } from "react"
import {Routes , Route} from "react-router-dom"
import {RouterData} from "./index-data"
import Header from "../components/Dashboard_Header/Dashboard_Header"
import Cookies from "universal-cookie";

function RouterComponent() {
  const pathname = window.location.pathname
  const cookies = new Cookies();
  return (
    <>
    {cookies.get("token") ?  <Header/> : null } 
    <Routes>
    {RouterData.map(elem => 
        <Route key={elem.id} path={elem.path} element={
            <Suspense fallback={<h1>Loading...</h1>}>
                {elem.component}
            </Suspense>            
        }/> 
        )}
    </Routes>
    </>
  )
}

export default RouterComponent