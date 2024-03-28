import React from "react";
import { NavbarPrincipal } from "../components/Navbar";
import { Container, Row, Col,Form } from "react-bootstrap";
import agregarDocumento from "../assets/img/agregar-documento.png";

import "../assets/styles/agregarDocumento.css";

const PageAgregarDocumento=()=>{
    return(
        <>
            <NavbarPrincipal/>
            <Container>
                <span className="sp-logoIndicacion">
                    <img src={agregarDocumento}  className="trinorma"/>
                    <h2>Agregar Documento</h2>
                </span>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del responsable:</Form.Label>
                            <Form.Control type="text" placeholder="Name example" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del documento:</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa el nombre del documento" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fecha:</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la fecha" />
                        </Form.Group>

                        <Form.Label>Departamento:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una opción</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    
                    <Col>
                        <Form.Label>Categoría:</Form.Label>
                        <Form.Select aria-label="Default select example">                    
                            <option>Seleccione una opción</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Label>Tipo de documento:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una opción</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Label>Documento:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una opción</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Row>
                <button className="bt-agrDocumento">Agregar</button>
                <button className="bt-carlDocumento">Cancelar</button>
            </Container>
        </>
    );
}

export default PageAgregarDocumento;
