// src/pages/Sincronizacionentiemporeal.js
import React from "react";
import MenuHamburguesa from "../../../components/Menuhamburguesa";
import { SyncProvider } from "../../../components/SyncProvider"; // Import the Provider
import SyncControls from "../../../components/SyncControls"; // Import Controls
import SyncFileList from "../../../components/SyncFileList"; // Import FileList


export default function Sincronizacionentiemporeal() {
  return (
    <div>
      <MenuHamburguesa />

      {/* Wrap content that needs sync context in SyncProvider */}
      <SyncProvider>
         {/* Contenedor principal para centrar el contenido y limitar el ancho */}
        <div className="container mx-auto px-4 py-8"> {/* Added py-8 for vertical padding */}
            <h1 className="text-2xl font-bold text-center mb-8">Sincronización de Documentos</h1> {/* Updated title styling */}

            {/* Sync Controls component */}
            <SyncControls />

            {/* Sync File List component */}
            <SyncFileList />

        </div>
      </SyncProvider>

    </div>
  );
}