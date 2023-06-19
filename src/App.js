
import { Routes, Route } from "react-router-dom";
import Home from "./component/Routes/Home";
import About from "./component/Routes/About";
import Blog from "./component/Routes/Blog";
import Pricing from "./component/Routes/Pricing";
import Faq from "./component/Routes/Faq";
import Navigation from "./component/navbar/Navigation";
import NotFound from "./component/Routes/NotFound";
import React from "react";

function App() {
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Blog' element={<Blog/>} />
    <Route path='/Pricing' element={<Pricing/>}/>
    <Route path='/Faq'element={<Faq/>}/>
    <Route path="*" element={<NotFound/>}/>

    </Route>
  
  </Routes>
  );
}

export default App;
