import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/Home/Home"
import { PageForm } from "../pages/PageForm/PageForm"

export const Router = () =>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/form" element={<PageForm />} />
         </Routes>
        </BrowserRouter>
    )
}