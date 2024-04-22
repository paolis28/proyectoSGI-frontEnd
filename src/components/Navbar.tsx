import React from "react";
import {Navbar,Container,Nav,InputGroup,Form } from 'react-bootstrap';

//import uplogo_1 from "../assets/img/uplogo_1.png";
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
        <img src={trinorma2} className="trinorma"/>
            <Nav className="me-auto" style={{marginLeft:"4%"}}>
                <Nav.Link href="/documentos">
                    <img src={documento}  className="trinorma"/>
                    Documentos
                </Nav.Link>

                <Nav.Link href="/agregarDocumento">
                    <img src={agregarDocumento}  className="trinorma"/>
                    Agregar Documento
                </Nav.Link>

                <Nav.Link href="/historialDocumentos">
                    <img src={historial}  className="trinorma"/>
                    Historial
                </Nav.Link>
            </Nav>

            <InputGroup style={{width:"70%", marginRight:"3%"}}>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Buscar"
                    aria-label="Buscar"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <img src={logPerfilNav} style={{width:"10%"}}/>
        </Container>
      </Navbar>
    );
}