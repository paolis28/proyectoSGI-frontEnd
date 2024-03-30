import TablaHistorial from '../components/TablaHistorial'
import '../assets/styles/historialPage.css';
import ImagenHistorial from '../assets/img/HistorialGris.png'
import { NavbarPrincipal } from "../components/Navbar";
const DocumentosHistorial =()=>{
return(
    <>
    <NavbarPrincipal></NavbarPrincipal>
    <div className="ContImgLetraH" style={{display:"flex"}}>
    <img className="ImagenDocumentoH" src={ImagenHistorial} alt="" />
    <h1 className="LetraDocumentosH">Historial</h1>
    </div>
  
<TablaHistorial></TablaHistorial>
    </>
)
}
export default DocumentosHistorial;