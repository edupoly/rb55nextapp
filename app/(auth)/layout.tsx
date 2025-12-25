import React from "react";
import Navbar from "./Navbar";

export default function Layout({children}:{children:React.ReactNode}){
    return <div className="m-5">

        <div className="my-3">
            <Navbar></Navbar>
        {children}
        </div>
    </div>
}