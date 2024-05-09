import React from "react";
import NavBar from "./Navigation/NavBar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom"


export default function Layout(){
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
}