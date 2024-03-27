import React from "react";

import FormLogin from "../components/Login";
import "../assets/styles/Pagelogin.css"
import upFondoImg from "../assets/img/up-Fondoimg.jpg";
import uplogo_1 from "../assets/img/uplogo_1.png";
import trinorma2 from "../assets/img/trinorma2_1.png";
import { Container } from "react-bootstrap";

const PageLogin = () => {
    return (
        <div className="containerInicial">
            <img src={upFondoImg}/>
            <Container className="ContainerLogoLogin">
                <img src={uplogo_1} className="logoizquierdo"/>
                <img src={trinorma2} className="logoderecho"/>
                <FormLogin/>
            </Container>
        </div>      
    );
}

export default PageLogin;
