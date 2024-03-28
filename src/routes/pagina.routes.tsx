import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLogin from "../pages/InicioLogin.tsx";
import PageAgregarDocumento from "../pages/agregarDocumento.tsx";
import Documentos from "../pages/documentos.tsx";

const Approuter=()=>{
    return(
        <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/agregarDocumento" element={<PageAgregarDocumento />} />
            <Route path="/documentos" element={<Documentos />} />
        </Routes>
    );
}

export default Approuter;



/*
link del figma:
https://www.figma.com/file/Ubm11oRpeiFNCUWPAjey58/Untitled?type=design&node-id=0-1&mode=design
*/