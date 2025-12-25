import React from "react";
import Navbar from "./Navbar";
export default function Layout({children}:{children:React.ReactNode}){
    return <div className="m-5">
        <Navbar></Navbar>
        <div className="my-3">
        {children}
        </div>
    </div>
}