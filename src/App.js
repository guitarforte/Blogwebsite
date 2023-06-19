import React from "react";
import  Home  from "./pages/home/Home";
import {   Routes, Route } from "react-router-dom"
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer }  from "./components/Footer";
import { Create } from "./components/Create/Create";
import { Login } from "./pages/Login/Login"
import { Account } from "./pages/Account/account";


const App = () => {
  return (
    <>   
        
        <Header/>
        
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/account' element={<Account/>} />
        <Route path="/create" element={ <Create/> } />
        </Routes>
       <Footer/> 
    </>
  )
}
export default App
