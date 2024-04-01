import React from 'react';
import { Form } from 'react-bootstrap';
import "../assets/styles/componenLogin.css"
import trinorma2 from "../assets/img/trinorma2_1.png";
//<link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet"></link>

const FormLogin = () => {
    return (
    <Form className='form-component-login'>
        <Form.Group>
            <img src={trinorma2} className='logoPerfil'/>
            <label className='lb-tituloLogin'>Sistema de Gesgtión Integral</label>
            <br/>
          <Form.Label className='labelLogin'>Usuario:</Form.Label>
          <input className='inputLogin'/>
        </Form.Group>
        <Form.Group>
          <Form.Label className='labelLogincontra'>Contraseña:</Form.Label>
          <input className='inputLogin' type='password'/>
        </Form.Group>
        <button className='bt-inicioSesion'>Iniciar Sesion</button>
    </Form>  
    );
};

export default FormLogin;