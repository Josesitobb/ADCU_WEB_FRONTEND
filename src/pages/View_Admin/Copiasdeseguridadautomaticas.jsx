import React, { useState } from 'react';
import MenuHamburguesa from "../../components/Menuhamburguesa";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Footer';
import "../../styles/styles.css";
export default function Copiasdeseguridadautomaticas() {
  const [backups, setBackups] = useState([
    { id: 1, fecha: '2025-04-08 14:32', estado: '✅ Activa', tipo: 'Automática', seleccionado: false },
    { id: 2, fecha: '2025-04-07 14:30', estado: '✅ Activa', tipo: 'Automática', seleccionado: false },
    { id: 3, fecha: '2025-04-06 12:00', estado: '❌ Inactiva', tipo: 'Manual', seleccionado: false },
  ]);
  
  const toggleSeleccion = (id) => {
    setBackups((prev) =>
      prev.map((copia) =>
        copia.id === id ? { ...copia, seleccionado: !copia.seleccionado } : copia
      )
    );
  };

  const cambiarEstado = (id) => {
    setBackups((prev) =>
      prev.map((copia) => {
        if (copia.id === id) {
          const esActiva = copia.estado === '✅ Activa';
          return {
            ...copia,
            estado: esActiva ? '❌ Inactiva' : '✅ Activa',
            fecha: !esActiva ? new Date().toLocaleString() : copia.fecha, // solo actualiza fecha si se activa
          };
        }
        return copia;
      })
    );
  };
  return (
    <div>
      <MenuHamburguesa />
      <h1 className="tituloPrincipal">Copias de seguridad automáticas</h1>

      <Table className='tablaTodos'>
        <thead>
          <tr>
            <th>N° de contrato</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {backups.map((copia) => (
            <tr key={copia.id}>
              <td>{copia.id}</td>
              <td>{copia.fecha}</td>
              <td>{copia.estado}</td>
              <td>{copia.tipo}</td>
              <td>
              <Button
              variant={copia.estado === '✅ Activa' ? 'danger' : 'success'}
              size="sm"
              onClick={() => cambiarEstado(copia.id)}
>
            {copia.estado === '✅ Activa' ? 'Desactivar' : 'Activar'}
            </Button>


              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer/>
    </div>
  );
}
