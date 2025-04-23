// src/components/SyncControls.js
import React from 'react';
import { useSync } from '../components/SyncProvider'; // Or useSync from SyncContext.js

const SyncControls = () => {
  const { overallStatus, startSync, isLoading } = useSync();

  // Determine if the "Sync Now" button should be disabled
  const isSyncButtonDisabled = overallStatus === 'syncing' || isLoading;

  // Get status message
   const getOverallStatusMessage = (status) => {
       switch(status) {
           case 'idle': return 'Listo para sincronizar';
           case 'loading': return 'Cargando estado de archivos...';
           case 'syncing': return 'Sincronizando...';
           case 'completed': return 'Sincronización completa';
           case 'error': return 'Sincronización con errores o conflictos';
           case 'conflict': return 'Hay conflictos que requieren atención';
           default: return status;
       }
   };

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between mb-6">
      <div className="mb-4 md:mb-0 md:mr-4">
        <p className="text-sm font-medium text-gray-700">Estado General:</p>
        <p className={`text-lg font-semibold ${
             overallStatus === 'completed' ? 'text-green-600' :
             overallStatus === 'syncing' || overallStatus === 'loading' ? 'text-blue-600' :
             overallStatus === 'error' || overallStatus === 'conflict' ? 'text-red-600' :
             'text-gray-800'
        }`}>
            {getOverallStatusMessage(overallStatus)}
        </p>
      </div>
      <button
        onClick={startSync}
        disabled={isSyncButtonDisabled}
        className={`px-6 py-2 rounded-md text-white font-semibold transition duration-200
           ${isSyncButtonDisabled
             ? 'bg-gray-400 cursor-not-allowed'
             : 'bg-blue-600 hover:bg-blue-700'
           }`}
      >
        {overallStatus === 'syncing' ? 'Sincronizando...' : 'Sincronizar Ahora'}
      </button>
      {/* Optional: Add Pause/Cancel buttons */}
      {/* {overallStatus === 'syncing' && (
          <button className="ml-4 px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">Pausar</button>
      )} */}
    </div>
  );
};

export default SyncControls;