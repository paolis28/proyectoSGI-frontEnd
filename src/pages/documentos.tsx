import TablaDocumentos from "../components/TablaDocumentos";
import '../assets/styles/DocumentosPage.css';
import ImagenDocumento from '../assets/img/DocumentoGris.png'
import { NavbarPrincipal } from "../components/Navbar";
const Documentos =()=>{
return(
    <>
    <NavbarPrincipal></NavbarPrincipal>
    <div className="ContImgLetra" style={{display:"flex"}}>
    <img className="ImagenDocumento" src={ImagenDocumento} alt="" />
    <h1 className="LetraDocumentos">Documentos</h1>
    </div>
  
<TablaDocumentos></TablaDocumentos>
    </>
)
}
export default Documentos;