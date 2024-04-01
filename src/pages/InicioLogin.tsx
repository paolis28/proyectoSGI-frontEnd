import React from "react";

import FormLogin from "../components/Login";
import "../assets/styles/Pagelogin.css"
import upFondoImg from "../assets/img/up-Fondoimg.jpg";
import { Container } from "react-bootstrap";

const PageLogin = () => {
    return (
        <div className="containerInicial">
            <img src={upFondoImg}/>
            <Container className="ContainerLogoLogin">
                <FormLogin/>
            </Container>
        </div>      
    );
}

export default PageLogin;
