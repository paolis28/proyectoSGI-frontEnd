import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLogin from "../pages/InicioLogin.tsx";

const Approuter=()=>{
    return(
        <Routes>
            <Route path="/" element={<PageLogin />} />
        </Routes>
    );
}

export default Approuter;



//https://www.figma.com/file/Ubm11oRpeiFNCUWPAjey58/Untitled?type=design&node-id=0-1&mode=design