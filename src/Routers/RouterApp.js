import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import Contect from "./Contect";
import Navigation from "./Nevigation";
import { Routes,Route } from "react-router-dom";
import './styles.css';

export default function RouterApp (){

    return(
        <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contect" element={<Contect/>}/>
        </Routes>
        </>
    )
}
