import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importaciones de páginas existentes
import Home from "./pages/Home";
import Index_Admin from "./pages/View_Admin/Index_Admin";
import Usuarios from "./pages/View_Admin/Usuarios/Usuarios";
import Pdf from "./components/Pdf";
import UsuariosDetalles from "./pages/View_Admin/Usuarios/UsuariosDetalles";
import GestordeDocumentos from "./pages/View_Admin/Gestion_Documental/GestordeDocumentos";
import IntercambiodeDocumentos from "./pages/View_Admin/Gestion_Documental/IntercambiodeDocumentos";
import RecuperacióndeArchivos from "./pages/View_Admin/Gestion_Documental/RecuperacióndeArchivos";
import GestionDeGrupos from "./pages/View_Admin/Control_De_Seguridad/GestionDeGrupos";
import GestionDePermisosIndividual from "./pages/View_Admin/Control_De_Seguridad/GestionDePermisosIndividual";
import RegistroDeActividades from "./pages/View_Admin/Control_De_Seguridad/RegistroDeActividades";
import ConsultasyReportes from "./pages/View_Admin/Control_De_Seguridad/ConsultasyReportes";
import MonitoreoyAlertas from "./pages/View_Admin/Control_De_Seguridad/MonitoreoyAlertas";
import EncritamientoDeDocumentos from "./pages/View_Admin/Control_De_Seguridad/EncritamientoDeDocumentos";
import ControlDeAceso from "./pages/View_Admin/Colaboracion/ControlDeAceso";
import GestorDePermisosIndividuales from "./pages/View_Admin/Control_De_Seguridad/GestionDePermisosIndividual";
import GestionDeVersionyComentarios from "./pages/View_Admin/Colaboracion/GestionDeVersionyComentarios";
import Documentos from "./pages/View_Admin/Documento_Proyecto/Documentos";
import EdicionDocumentosColaborativos from "./pages/View_Admin/Colaboracion/EdicionDocumentosColaborativos";
import Aprobacion from "./pages/View_Admin/Flujo_De_Trabajo/Aprobacion";
import Seguimiento from "./pages/View_Admin/Flujo_De_Trabajo/Seguimiento";
import FirmadeDocumento from "./pages/View_Admin/Firma/FirmadeDocumentos";
import EnviodeDocumentos from "./pages/View_Admin/Firma/EnviodeDocumentos";
import ValidaciondelaFirmas from "./pages/View_Admin/Firma/ValidaciondelaFirma";
import Copiasdeseguridadautomaticas from "./pages/View_Admin/Gestor_Cloud/Backups";
import Accesoremotoadocumentos from "./pages/View_Admin/Gestor_Cloud/Accesoremotoadocumentos";
import Sicronizacionentiemporeal from "./pages/View_Admin/Gestor_Cloud/Sincronizacion";
import PoliticasretenciondeDocumentos from "./pages/View_Admin/Retencion/PoliticasretenciondeDocumentos";
import ArchivoAutomaticoseguncriterio from "./pages/View_Admin/ArchivoAutomaticoseguncriterio";
import Eliminacionseguradedocumentosobsoletos from "./pages/View_Admin/Retencion/Eliminacionseguradedocumentosobsoletos";
import Reportedeflujosdetrabajo from "./pages/View_Admin/Reportes/Reportedeflujosdetrabajo";
import Reportedefirmaelectronica from "./pages/View_Admin/Reportes/Reportedefirmaelectronica";
import Reportedearchivoyretenciondedocumentos from "./pages/View_Admin/Reportes/Reportedearchivoyretenciondedocumentos";
import Reportedeseguridaddecontroldeacccesos from "./pages/View_Admin/Reportes/Reportedeseguridaddecontroldeacccesos";

// ✅ Nuevo módulo de reportes comparativos
import ReportModule from './pages/View_Admin/ReportModule';

import './styles/ReportModule.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route index path="/" element={<Home />} />
        <Route path="/AdminHome" element={<Index_Admin />} />
        <Route path="/AdminPdf" element={<Pdf />} />

        {/* Usuarios */}
        <Route path="/AdminUsuarios" element={<Usuarios />} />
        <Route path="/AdminUsuarioDetalles" element={<UsuariosDetalles />} />

        {/* Gestión documental */}
        <Route path="/GestorDeDocumentos" element={<GestordeDocumentos />} />
        <Route path="/RecuperacionDeArchivos" element={<RecuperacióndeArchivos />} />
        <Route path="/IntercambiodeDocumentos" element={<IntercambiodeDocumentos />} />

        {/* Seguridad y control de acceso */}
        <Route path="/GestionDeGrupos" element={<GestionDeGrupos />} />
        <Route path="/GestionIndividual" element={<GestionDePermisosIndividual />} />
        <Route path="/RegistroDeActivdades" element={<RegistroDeActividades />} />
        <Route path="/Consultas" element={<ConsultasyReportes />} />
        <Route path="/Monitoreo" element={<MonitoreoyAlertas />} />
        <Route path="/Encritamiento" element={<EncritamientoDeDocumentos />} />

        {/* Colaboración */}
        <Route path="/ControlDeAceso" element={<ControlDeAceso />} />
        <Route path="/PermisoIndividuales" element={<GestorDePermisosIndividuales />} />
        <Route path="/ControlDeCambios" element={<GestionDeVersionyComentarios />} />
        <Route path="/EdicionColaborativo" element={<EdicionDocumentosColaborativos />} />

        {/* Documentación de proyecto */}
        <Route path="/DocumentosProyectos" element={<Documentos />} />

        {/* Flujo de trabajo */}
        <Route path="/Aprobacion" element={<Aprobacion />} />
        <Route path="/Seguimiento" element={<Seguimiento />} />

        {/* Firma electrónica */}
        <Route path="/FirmaDeDocumento" element={<FirmadeDocumento />} />
        <Route path="/EnviodeDocumento" element={<EnviodeDocumentos />} />
        <Route path="/ValidaciondelaFirma" element={<ValidaciondelaFirmas />} />

        {/* Almacenamiento en la nube */}
        <Route path="/Backups" element={<Copiasdeseguridadautomaticas />} />
        <Route path="/DocumentosRemotos" element={<Accesoremotoadocumentos />} />
        <Route path="/Sincronizacion" element={<Sicronizacionentiemporeal />} />

        {/* Archivo y retención */}
        <Route path="/PoliticasretenciondeDocumentos" element={<PoliticasretenciondeDocumentos />} />
        <Route path="/ArchivoAutomaticoseguncriterio" element={<ArchivoAutomaticoseguncriterio />} />
        <Route path="/Eliminacionseguradedocumentosobsoletos" element={<Eliminacionseguradedocumentosobsoletos />} />

        {/* Reportes existentes */}
        <Route path="/Reportedeflujosdetrabajo" element={<Reportedeflujosdetrabajo />} />
        <Route path="/Reportedefirmaelectronica" element={<Reportedefirmaelectronica />} />
        <Route path="/Reportedeseguridaddecontroldeacccesos" element={<Reportedeseguridaddecontroldeacccesos />} />
        <Route path="/Reportedearchivoyretenciondedocumentos" element={<Reportedearchivoyretenciondedocumentos />} />

        {/* ✅ Nuevo módulo de reportes comparativos */}
        <Route path="/admin/reportes" element={<ReportModule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
