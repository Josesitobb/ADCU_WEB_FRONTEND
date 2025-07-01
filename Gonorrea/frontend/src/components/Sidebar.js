import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaUsers,
  FaUserTie,
  FaUserShield,
  FaUserFriends,
  FaFileContract,
  FaFolderOpen,
  FaDatabase,
  FaMoneyCheckAlt,
  FaChartBar,
  FaCheckCircle,
  FaFileAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./Sidebar.css";
// import logo from '../assets/logo.png'; // 🧠 Asegúrate que esta ruta sea correcta

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [contractorOpen, setContractorOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={toggleMenu}
      ></div>

      <div className={`sidebar-menu ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          {/* <img src={logo} alt="Logo ADCU" className="sidebar-logo" /> */}
          <h4>ADCU</h4>
        </div>

        <nav>
          <Link to="/dashboard" onClick={toggleMenu}>
            <FaChartBar /> Dashboard
          </Link>

          {/* Gestión de Usuario */}
          <div className="menu-item" onClick={() => setUserOpen(!userOpen)}>
            <FaUsers /> Gestión de Usuario{" "}
            {userOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {userOpen && (
            <div className="submenu">
              <Link to="/AdminUser" onClick={toggleMenu}>
                <FaUserShield /> Admins
              </Link>
              <Link to="/FuncionaryUser" onClick={toggleMenu}>
                <FaUserFriends /> Funcionarios
              </Link>
              <Link to="/ContractUser" onClick={toggleMenu}>
                <FaUserTie /> Contratistas
              </Link>
            </div>
          )}
          {/* Gestion de contratos */}
          <Link to="/Contracts" onClick={toggleMenu}>
            <FaFileContract /> Contratos
          </Link>
          {/* Contratistas */}
          <div
            className="menu-item"
            onClick={() => setContractorOpen(!contractorOpen)}
          >
            <FaFileContract /> Contratistas{" "}
            {contractorOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {contractorOpen && (
            <div className="submenu">
              <Link to="/contratistas/documental" onClick={toggleMenu}>
                <FaFolderOpen /> Gestión Documental
              </Link>
              <Link to="/contratistas/datos" onClick={toggleMenu}>
                <FaDatabase /> Gestión de Datos
              </Link>
              <Link to="/contratistas/cobro" onClick={toggleMenu}>
                <FaMoneyCheckAlt /> Gestión de Cobro
              </Link>
            </div>
          )}

          {/* Otros */}
          <Link to="/resultado" onClick={toggleMenu}>
            <FaCheckCircle /> Resultado
          </Link>
          <Link to="/reporte" onClick={toggleMenu}>
            <FaFileAlt /> Reporte
          </Link>

          <div
            onClick={() => {
              toggleMenu();
              cerrarSesion();
            }}
            className="logout"
          >
            <FaSignOutAlt /> Cerrar sesión
          </div>
        </nav>
      </div>
    </>
  );
}
