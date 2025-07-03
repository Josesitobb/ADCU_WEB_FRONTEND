// src/components/SyncFileList.js
import React from 'react';
import { useSync } from '../components/SyncContext'; // Or useSync from SyncContext.js

// Helper function to get status text and color
const getStatusInfo = (status) => {
    switch (status) {
        case 'idle': return { text: 'Pendiente', color: 'text-gray-500' };
        case 'pending': return { text: 'Esperando', color: 'text-yellow-600' };
        case 'syncing': return { text: 'Sincronizando...', color: 'text-blue-600' };
        case 'synced': return { text: 'Sincronizado', color: 'text-green-600' };
        case 'error': return { text: 'Error', color: 'text-red-600' };
        case 'conflict': return { text: 'Conflicto', color: 'text-orange-600' };
        case 'paused': return { text: 'Pausado', color: 'text-gray-600' };
        default: return { text: status, color: 'text-gray-500' };
    }
};

const SyncFileList = () => {
  const { files, isLoading, error } = useSync(); // Assume error is part of context if needed

  if (isLoading) {
    return <p>Cargando lista de archivos...</p>;
  }

  if (error) { // If there's a global fetch error
      return <p className="text-red-500">Error al cargar archivos.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 border-b pb-2">Archivos para Sincronizar</h3>
      {files.length === 0 ? (
        <p>No hay archivos para mostrar.</p>
      ) : (
        <ul className="space-y-3">
          {files.map(file => {
            const statusInfo = getStatusInfo(file.status);
            const displayProgress = file.status === 'syncing' ? `${Math.round(file.progress)}%` : '';
            const lastSyncedText = file.lastSynced ? new Date(file.lastSynced).toLocaleString() : '-';

            return (
              <li key={file.id} className="border-b last:border-b-0 pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{file.name}</p>
                    <p className={`text-sm ${statusInfo.color}`}>
                        {statusInfo.text} {displayProgress}
                        {file.error && <span className="ml-2 text-red-500 text-xs">({file.error})</span>}
                    </p>
                     {file.status === 'synced' && <p className="text-xs text-gray-500">Última sincronización: {lastSyncedText}</p>}
                  </div>
                   {/* Optional: Add actions per file, e.g., Retry, Resolve Conflict */}
                   {/* {file.status === 'error' && (
                       <button className="ml-4 text-blue-500 hover:underline text-sm">Reintentar</button>
                   )}
                    {file.status === 'conflict' && (
                       <button className="ml-4 text-orange-500 hover:underline text-sm">Resolver</button>
                   )} */}
                </div>
                {/* Progress bar */}
                {file.status === 'syncing' && (
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${file.progress}%` }}></div>
                    </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SyncFileList;