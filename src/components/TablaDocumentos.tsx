import React, { useState } from 'react';
import '../assets/styles/TablaDocumentos.css';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import ImgOjo from '../assets/img/FaRegEye.png';
import ImgNube from '../assets/img/MdCloudDownload.png';
import ImgEliminar from '../assets/img/MdDelete.png';
import Filtro from '../assets/img/filtroIcon_.png'

interface Documento {
  id: number;
  nombre: string;
  tipo: string;
  categoria: string;
  documento: string;
  fechaModificacion: string;
}

const TablaDocumentos: React.FC = () => {
  const [documentos] = useState<Documento[]>([
    { id: 1, nombre: 'Documento 1', tipo: 'Tipo 1', categoria: 'Categoria 1',documento: ' ', fechaModificacion: '2024-03-28' },
    { id: 2, nombre: 'Documento 2', tipo: 'Tipo 2', categoria: 'Categoria 2',documento: ' ', fechaModificacion: '2024-03-29' },
  ]);

  return (
    <div className="contenedorDeTabla1">
<br /><br />
<div className="contenedorCamposTexto">
<Form className="contenedorCamposTexto">
        <FormGroup>
          <Form.Label>Buscar</Form.Label>
          <FormControl type="text" placeholder="Nombre del documento" />
        </FormGroup>
        <FormGroup>
          <Form.Label>Categoria</Form.Label>
          <FormControl type="text" placeholder="Tipo" />
        </FormGroup>
        <FormGroup>
          <Form.Label>Tipo</Form.Label>
          <FormControl type="text" placeholder="Categoria" />
        </FormGroup>
        <FormGroup>
          <Form.Label>Documento</Form.Label>
          <FormControl type="text" placeholder="Categoria" />
        </FormGroup>
        <img className='imagenFiltro' src={Filtro} alt="" />
        <button className='botonFiltro'>Aplicar filtro</button>
      </Form>
      </div>
      <br />
      <hr />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre del documento</th>
            <th scope="col">Tipo</th>
            <th scope="col">Categoria</th>
            <th scope="col">Documento</th>
            <th scope="col">Ultima fecha de modificacion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((documento) => (
            <tr key={documento.id}>
              <th scope="row">{documento.id}</th>
              <td>{documento.nombre}</td>
              <td>{documento.tipo}</td>
              <td>{documento.categoria}</td>
              <td>{documento.documento}</td>
              <td>{documento.fechaModificacion}</td>
              <td>
                <button className='botonVer'>
                  <img src={ImgOjo} alt=""/>Ver
                </button>
                <button className='botonDescarga'>
                  <img src={ImgNube} alt=""/> Descargar
                </button>
                <button className='botonEliminar'>
                  <img src={ImgEliminar} alt=""/> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaDocumentos;
