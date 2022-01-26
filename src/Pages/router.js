import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home'
import SignUp from './signup';
import Login from './login';

class PageRoute extends React.Component{
render(){
    return(
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/signup" element={<SignUp/>} />
          <Route  path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    )
}
}

export default PageRoute