import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Menuhamburguesa.css";

export default function MenuHamburguesa() {
  // Usuarios
  const [menuUsuarios, setMenuUsuarios] = useState(false);
  const AparecerMenuUsuarios = () => {
    setMenuUsuarios(!menuUsuarios);
  };

  //Gestion documental
  const [menuGestionDocumental, setGestionDocumental] = useState(false);
  const AparecermenuGestionDocumental = () => {
    setGestionDocumental(!menuGestionDocumental);
  };

  // Control de seguridad
  const [menuSeguridad, setSeguridad] = useState(false);
  const AparecermenuSeguridad = () => {
    setSeguridad(!menuSeguridad);
  };

  // Colaboracion
  const [menuColaboracion, setColaboracion] = useState(false);
  const AparecermenuColaboracion = () => {
    setColaboracion(!menuColaboracion);
  };

  // Flujo de trabajo
  const [menuFlujo, setFlujo] = useState(false);
  const AparecermenuFlujo = () => {
    setFlujo(!menuFlujo);
  };

  // Firma electronica
  const [menuFirma, setFirma] = useState(false);
  const AparecermenuFirma = () => {
    setFirma(!menuFirma);
  };
  // Almacenamiento en la nube
  const [menuNube, setNube] = useState(false);
  const AparecermenuNube = () => {
    setNube(!menuNube);
  };

  // Archivo en retencion
  const [menuRetencion, setRetencion] = useState(false);
  const AparecermenuRetencion = () => {
    setRetencion(!menuRetencion);
  };

  // Reportes
  const [menuReportes, setReportes] = useState(false);
  const AparecermenuReportes = () => {
    setReportes(!menuReportes);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link className="logo" to={"/AdminHome"}>
            <img src="../favicon.ico" className="logo" alt="Logo" />
            <span className="nav-item logo">ADCU</span>
          </Link>
        </li>
        {/* Usuarios */}
        <li>
          <a href="#" id="sapo" onClick={AparecerMenuUsuarios}>
            <i className="fas fa-user"></i>
            <span className="nav-item">Usuarios</span>
          </a>
        </li>

        <li className={menuUsuarios ? "sub-activa" : "sub"}>
          <Link to={"/AdminUsuarios"}>
            <span className="submenu">Creacion de usuarios</span>
          </Link>
        </li>
        <li className={menuUsuarios ? "sub-activa" : "sub"}>
          <Link to={"/AdminUsuarioDeTalles"}>
            <span className="submenu">Usuarios detalles</span>
          </Link>
        </li>

        {/* Gestion documental */}
        <li>
          <a href="#" onClick={AparecermenuGestionDocumental}>
            <i className="fas fa-file"></i>
            <span className="nav-item">Gestion documental</span>
          </a>
        </li>
        <li className={menuGestionDocumental ? "sub-activa" : "sub"}>
          <Link to={"/GestorDeDocumentos"}>
            <span className="submenu">Gestor de documentos</span>
          </Link>
        </li>
        <li className={menuGestionDocumental ? "sub-activa" : "sub"}>
          <Link to={"/RecuperacionDeArchivos"}>
            <span className="submenu">Recuperacion de archivos</span>
          </Link>
        </li>
        <li className={menuGestionDocumental ? "sub-activa" : "sub"}>
          <Link to={"/IntercambioDeDocumentos"}>
            <span className="submenu">Intercambio de documentos</span>
          </Link>
        </li>

        {/* Control de seguridad */}
        <a href="#" onClick={AparecermenuSeguridad}>
          <i className="fas fa-shield-halved"></i>
          <span className="nav-item">Control de Seguridad</span>
        </a>
        <li className={menuSeguridad ? "sub-activa" : "sub"}>
          <Link to={"/GestionDeGrupos"}>
            <span className="submenu">Gestion de grupos</span>
          </Link>
        </li>
        <li className={menuSeguridad ? "sub-activa" : "sub"}>
          <Link to={"/GestionIndividual"}>
            <span className="submenu">Permisos Individuales</span>
          </Link>
        </li>

        <li className={menuSeguridad ? "sub-activa" : "sub"}>
          <Link to={"/RegistroDeActivdades"}>
            <span className="submenu">Registro de actividades</span>
          </Link>
        </li>

        <li className={menuSeguridad ? "sub-activa" : "sub"}>
          <Link to={"/Consultas"}>
            <span className="submenu"> Consultas y reportes</span>
          </Link>
        </li>
        <li className={menuSeguridad ? "sub-activa" : "sub"}>
          <Link to={"/Monitoreo"}>
            <span className="submenu"> Monitoreo y Alertas</span>
          </Link>
        </li>
        <li className={menuSeguridad ? "sub-activa" : "sub"}>
          <Link to={"/Encritamiento"}>
            <span className="submenu"> Encriptamiento</span>
          </Link>
        </li>
        {/* Colaboracion  */}
        <li>
          <a href="#" onClick={AparecermenuColaboracion}>
            <i className="fas fa-comment"></i>
            <span className="nav-item">Colaboracion</span>
          </a>
        </li>
        <li className={menuColaboracion ? "sub-activa" : "sub"}>
          <Link to={"/ControlDeAceso"}>
            <span className="submenu"> Edicion colaborativa</span>
          </Link>
        </li>
        <li className={menuColaboracion ? "sub-activa" : "sub"}>
          <Link to={"/PermisoIndividuales"}>
            <span className="submenu"> Permisos individual</span>
          </Link>
        </li>
        <li className={menuColaboracion ? "sub-activa" : "sub"}>
          <Link to={"/ControlDeCambios"}>
            <span className="submenu"> Control de Cambios</span>
          </Link>
        </li>
        {/* Flujo de trabajo */}
        <li>
          <a href="#" onClick={AparecermenuFlujo}>
            <i className="fas fa-arrow-right"></i>
            <span className="nav-item">Flujo de trabajo</span>
          </a>
        </li>
        <li className={menuFlujo ? "sub-activa" : "sub"}>
          <Link to={"/Aprobacion"}>
            <span className="submenu"> Aprobacion</span>
          </Link>
        </li>
        <li className={menuFlujo ? "sub-activa" : "sub"}>
          <Link to={"/Seguimiento"}>
            <span className="submenu"> Seguimiento</span>
          </Link>
        </li>
        
        <li className={menuFlujo ? "sub-activa" : "sub"}>
          <Link to={"/RechazoModificacion"}>
            <span className="submenu"> Rechazo o Modificacion</span>
          </Link>
        </li>
        {/* Firma electronica */}
        <li>
          <a href="#" onClick={AparecermenuFirma}>
            <i className="fas fa-pen"></i>
            <span className="nav-item">Firma</span>
          </a>
        </li>
        <li className={menuFirma ? "sub-activa" : "sub"}>
          <Link to={"/FirmaDeDocumento"}>
            <span className="submenu"> Firma documento</span>
          </Link>
        </li>
        <li className={menuFirma ? "sub-activa" : "sub"}>
          <Link to={"/EnviodeDocumento"}>
            <span className="submenu"> Enviar documento</span>
          </Link>
        </li>
        <li className={menuFirma ? "sub-activa" : "sub"}>
          <Link to={"/ValidaciondelaFirma"}>
            <span className="submenu"> Validar firma</span>
          </Link>
        </li>
        {/* Alcenamineto en la nube */}
        <li>
          <a href="#" onClick={AparecermenuNube}>
            <i className="fas fa-cloud"></i>
            <span className="nav-item">Gestor Cloud</span>
          </a>
        </li>
        <li className={menuNube ? "sub-activa" : "sub"}>
          <Link to={"/Backups"}>
            <span className="submenu">Backups </span>
          </Link>
        </li>
        <li className={menuNube ? "sub-activa" : "sub"}>
          <Link to={"/DocumentosRemotos"}>
            <span className="submenu">Documentos Remotos </span>
          </Link>
        </li>
        <li className={menuNube ? "sub-activa" : "sub"}>
          <Link to={"/Sincronizacion"}>
            <span className="submenu">Sincronización</span>
          </Link>
        </li>
        {/* Archivo en retencion */}
        <li>
          <a href="#" onClick={AparecermenuRetencion}>
            <i className="fas  fa-truck"></i>
            <span className="nav-item">Retención</span>
          </a>
        </li>
        <li className={menuRetencion ? "sub-activa" : "sub"}>
          <Link to={"/PoliticasretenciondeDocumentos"}>
            <span className="submenu">Políticas de Retención</span>
          </Link>
        </li>
        <li className={menuRetencion ? "sub-activa" : "sub"}>
          <Link to={"/Eliminacionseguradedocumentosobsoletos"}>
            <span className="submenu"> Eliminación Segura</span>
          </Link>
        </li>
        {/* Reportes - Only the new items you wanted to add */}
        <li>
          <a href="#" onClick={AparecermenuReportes}>
            <i className="fas fa-note-sticky"></i>
            <span className="nav-item">Reportes</span>
          </a>
        </li>

        <li className={menuReportes ? "sub-activa" : "sub"}>
          <Link to={"/ReporteComparativo"}>
            <span className="submenu">📊 Reporte Comparativo</span>
          </Link>
        </li>

        <li className={menuReportes ? "sub-activa" : "sub"}>
          <Link to={"/HistorialReportes"}>
            <span className="submenu">📁 Historial de Reportes</span>
          </Link>
        </li>

        <li className={menuReportes ? "sub-activa" : "sub"}>
          <Link to={"/DescargarExcel"}>
            <span className="submenu">⬇️ Descargar Excel Global</span>
          </Link>
        </li>
        
        {/* Documentacion proyecto */}
        <li>
          <Link to={"/DocumentosProyectos"}>
            <i className="fas fa-hot-tub-person"></i>
            <span className="nav-item">Documentacion proyecto</span>
          </Link>
        </li>

        <li>
          <Link to={"/"}>
            <a href="#" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}