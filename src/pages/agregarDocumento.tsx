import React, { useState } from "react";
import { NavbarPrincipal } from "../components/Navbar";
import { Container, Row, Col,Form } from "react-bootstrap";
import agregarDocumento from "../assets/img/agregar-documento.png";

import "../assets/styles/agregarDocumento.css";

const PageAgregarDocumento=()=>{
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const tiposPermitidos = ["doc", "docx"];
          const extension = file.name.split(".").pop()?.toLowerCase();
          if (!extension || !tiposPermitidos.includes(extension)) {
            alert("Por favor, seleccione un archivo de Word.");
            event.target.value = "";
            setSelectedFile(null);
            return;
          }
          setSelectedFile(file);
        }
      };

    return(
        <>
            <NavbarPrincipal/>
            <Container>
                <span className="sp-logoIndicacion">
                    <img src={agregarDocumento}/>
                    <h2>Agregar Documento</h2>
                </span><br/>
                <Row className="fila-agrDocumento">
                    <Col className="col-1-agrdocumento">
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
                    
                    <Col className="col-2-agrdocumento">
                        <Form.Label>Categoría:</Form.Label>
                        <Form.Select aria-label="Default select example">                    
                            <option>Seleccione una opción</option>
                            <option value="1">Coordinación SGI</option>
                            <option value="2">Procedes Brig Comis SGA SST</option>
                            <option value="3">Proced Mandatarios</option>
                            <option value="3">Procedimientos Firmados</option>
                            <option value="3">Procesos Operativos</option>
                        </Form.Select><br/>

                        <Form.Label>Tipo de documento:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una opción</option>
                            <option value="1">Proceso Académico</option>
                            <option value="2">Proceso Administrativo</option>
                            <option value="3">Proceso Planeación INST</option>
                            <option value="1">Proceso Serv Univers</option>
                            <option value="2">Proceso Vinculación</option>
                            <option value="3">Proceso Invest Cient Des Tec</option>
                        </Form.Select><br/>

                        <Form.Label>Documento:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una opción</option>
                            <option value="1">Procedimientos Académicos</option>
                            <option value="1">Registros Académico</option>
                        </Form.Select><br/>
                    
                    <div className="div-file">
                        <input
                            className="input-file-document"
                            type="file"
                            id="docu"
                            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-
                            officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                        />
                        {selectedFile && (
                            <p>Archivo seleccionado: {selectedFile.name}</p>
                        )}
                        <label>Click to upload</label>
                        <p>SVG, PNG, JPG or GIF (max. 3MB)</p>
                    </div>

                    </Col>
                </Row><br/>
                <button className="bt-agrDocumento">Agregar</button>
                <button className="bt-carlDocumento">Cancelar</button>
            </Container>
        </>
    );
}

export default PageAgregarDocumento;
