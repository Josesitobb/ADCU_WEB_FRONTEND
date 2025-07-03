import React from 'react';
import Navbar_Home from '../components/Navbar_Home';
import Formulario from '../components/Formulario';

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fdf5f7" }}>
      <Navbar_Home />
      <Formulario />
    </div>
  );
}
