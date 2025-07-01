import React from 'react';
import Sidebar from '../Sidebar';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { GearFill, Power } from 'react-bootstrap-icons';

export default function Header() {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div>
            <Sidebar />
            <Navbar bg="dark" variant="dark" expand="lg" className="admin-navbar">
                <Container fluid>
                    <Navbar.Brand className="d-flex align-items-center">
                        <div className="navbar-brand-icon me-2">
                            <GearFill size={20} />
                        </div>
                        <span className="navbar-brand-text">Panel de Administración</span>
                    </Navbar.Brand>
                    
                    <Nav className="ms-auto">
                        <Nav.Link 
                            onClick={cerrarSesion}
                            className="logout-btn"
                        >
                            <Power size={18} className="me-1" />
                            Cerrar sesión
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <style jsx>{`
                .admin-navbar {
                    background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    padding: 0.8rem 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .navbar-brand-icon {
                    background: rgba(255, 255, 255, 0.1);
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #4dabf7;
                }
                
                .navbar-brand-text {
                    font-weight: 600;
                    font-size: 1.1rem;
                    color: #f8f9fa;
                    letter-spacing: 0.5px;
                }
                
                .logout-btn {
                    color: rgba(255, 255, 255, 0.7);
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    
                    &:hover {
                        background: rgba(255, 107, 107, 0.2);
                        color: #ff6b6b;
                    }
                }
            `}</style>
        </div>
    )
}