import React from "react";
import {Navbar,Container,Nav,InputGroup,Form } from 'react-bootstrap';

import uplogo_1 from "../assets/img/uplogo_1.png";
import documento from "../assets/img/documento.png";
import agregarDocumento from "../assets/img/agregar-documento.png";
import historial from "../assets/img/historial.png";
import trinorma2 from "../assets/img/trinorma2_1.png";
import logPerfilNav from "../assets/img/perfil.png";

import "../assets/styles/navbarPrincipal.css";

export const NavbarPrincipal=()=>{
    return(
        <Navbar className="bg-body-tertiary">
        <Container>
            <img src={uplogo_1}/>
            <Nav className="me-auto">
                <Nav.Link href="#documentos">
                    <img src={documento}  className="trinorma"/>
                    Documentos
                </Nav.Link>

                <Nav.Link href="#agregarDocumento">
                    <img src={agregarDocumento}  className="trinorma"/>
                    Agregar Documento
                </Nav.Link>

                <Nav.Link href="#historial">
                    <img src={historial}  className="trinorma"/>
                    Historial
                </Nav.Link>
            </Nav>

            <InputGroup>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            
            <img src={trinorma2} className="trinorma"/>
            <img src={logPerfilNav} className="trinorma"/>
        </Container>
      </Navbar>
    );
}