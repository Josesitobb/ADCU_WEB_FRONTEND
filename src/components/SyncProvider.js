// src/contexts/SyncProvider.js
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

// Re-export the context and hook for convenience
export const SyncContext = createContext(null); // Create it again here, although importing from SyncContext.js is cleaner
export const useSync = () => useContext(SyncContext);


// --- Simulación de datos y lógica ---
// En una aplicación real, esto vendría de una API y usaría operaciones de archivo reales
const mockFiles = [
  { id: 1, name: "Documento_A.pdf", status: "idle", progress: 0, lastSynced: null, size: "1.2MB" },
  { id: 2, name: "Imagen_B.jpg", status: "idle", progress: 0, lastSynced: null, size: "3.5MB" },
  { id: 3, name: "HojaCalculo_C.xlsx", status: "idle", progress: 0, lastSynced: null, size: "0.8MB" },
  { id: 4, name: "Presentacion_D.pptx", status: "idle", progress: 0, lastSynced: null, size: "5.1MB" },
  { id: 5, name: "Documento_E_v2.docx", status: "idle", progress: 0, lastSynced: null, size: "0.5MB" },
  { id: 6, name: "Archivo_viejo.txt", status: "synced", progress: 100, lastSynced: new Date(Date.now() - 86400000), size: "0.1MB" }, // Simulate already synced
  { id: 7, name: "Archivo_con_error.zip", status: "error", progress: 0, lastSynced: null, error: "Disk full", size: "2.0MB" }, // Simulate an error
  { id: 8, name: "Documento_F_conflicto.pdf", status: "conflict", progress: 0, lastSynced: new Date(Date.now() - 3600000), size: "1.0MB" }, // Simulate a conflict
];

// Simula la obtención inicial de archivos
const simulateFetchFiles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate some files being slightly out of sync or needing check
      const filesToSync = mockFiles.map(file => {
          if (['synced', 'error', 'conflict'].includes(file.status)) {
              return file; // Keep existing status for demonstration
          }
          // Otherwise, mark as idle/pending for sync
          return { ...file, status: 'idle', progress: 0, lastSynced: null };
      });
      resolve(filesToSync);
    }, 500); // Short delay for fetching
  });
};

// Simula el proceso de sincronización de un archivo individual
const simulateSyncFile = (file, onProgress, onSuccess, onError) => {
  console.log(`Simulando sincronización de: ${file.name}`);
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15; // Simulate varying progress speed
    if (progress >= 100) {
      clearInterval(interval);
      console.log(`Sincronización completada para: ${file.name}`);
      onSuccess(file); // Call success callback
    } else {
      onProgress(file, Math.min(progress, 100)); // Call progress callback
    }
  }, 150); // Update progress every 150ms

   // Simulate a random error or conflict during sync for some files
  if (file.name.includes('error') && Math.random() < 0.8) { // High chance of error for 'error' file
      setTimeout(() => {
          clearInterval(interval);
          console.error(`Simulando error durante sincronización de: ${file.name}`);
          onError(file, "Network error during upload.");
      }, Math.random() * 1000 + 300); // Error happens sometime within the first second
      return () => clearInterval(interval); // Return cleanup for interval
  }
   if (file.name.includes('conflicto') && Math.random() < 0.6) { // Chance of conflict for 'conflict' file
        setTimeout(() => {
            clearInterval(interval);
             console.warn(`Simulando conflicto durante sincronización de: ${file.name}`);
            onError(file, "Conflict detected."); // Using onError for simplicity to show a message
        }, Math.random() * 1500 + 500); // Conflict happens sometime within the first 1.5 seconds
        return () => clearInterval(interval); // Return cleanup for interval
   }

    // If no error/conflict simulated, return cleanup for the interval
   return () => clearInterval(interval);
};

// --- Componente Provider ---
export const SyncProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [overallStatus, setOverallStatus] = useState('idle'); // 'idle', 'loading', 'syncing', 'completed', 'error', 'conflict'
  const [isLoading, setIsLoading] = useState(true);

  // Use a ref to keep track of active sync intervals for cleanup
  const activeSyncs = useRef({});

  // Effect to load initial files
  useEffect(() => {
    setIsLoading(true);
    simulateFetchFiles()
      .then(initialFiles => {
        setFiles(initialFiles);
        setOverallStatus(initialFiles.some(f => f.status === 'error' || f.status === 'conflict') ? 'error' : 'idle'); // Set status based on initial files
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching initial files:", err);
        setOverallStatus('error');
        setIsLoading(false);
      });

      // Cleanup function to clear any active intervals if the component unmounts
      return () => {
          Object.values(activeSyncs.current).forEach(clearInterval);
      };

  }, []); // Run only once on mount

  // Function to start the sync process
  const startSync = () => {
    if (overallStatus === 'syncing' || isLoading) {
      console.log("Sync already in progress or loading.");
      return; // Prevent starting sync if already syncing or loading
    }

    console.log("Starting sync...");
    setOverallStatus('syncing'); // Set overall status to syncing

    // Find files that are not yet synced, are in error state, or conflict state
    const filesToProcess = files.filter(f =>
      f.status === 'idle' || f.status === 'error' || f.status === 'conflict'
    );

    if (filesToProcess.length === 0) {
        console.log("No files need syncing.");
        setOverallStatus('completed');
        return;
    }

    // Reset status and progress for files that were idle, error or conflict
    setFiles(prevFiles => prevFiles.map(file => {
        if (filesToProcess.find(f => f.id === file.id)) {
             // Keep error/conflict status but reset progress if needed, or set to pending/syncing
             // For this simulation, we'll just mark them as pending to retry
             return { ...file, status: 'pending', progress: 0, error: null };
        }
        return file;
    }));


    // Process each file individually with simulation
    filesToProcess.forEach(file => {
        const cleanup = simulateSyncFile(
            file,
            (syncedFile, progress) => {
                // On progress update
                setFiles(prevFiles =>
                    prevFiles.map(f =>
                        f.id === syncedFile.id ? { ...f, status: 'syncing', progress: progress } : f
                    )
                );
            },
            (syncedFile) => {
                // On success
                setFiles(prevFiles =>
                    prevFiles.map(f =>
                        f.id === syncedFile.id ? { ...f, status: 'synced', progress: 100, lastSynced: new Date(), error: null } : f
                    )
                );
                 // Remove from active syncs ref
                 delete activeSyncs.current[syncedFile.id];
                 // Check if all files are synced
                 if (Object.keys(activeSyncs.current).length === 0) {
                     console.log("All syncs completed.");
                     setOverallStatus('completed');
                 }
            },
            (failedFile, errorMessage) => {
                // On error
                 setFiles(prevFiles =>
                    prevFiles.map(f =>
                        f.id === failedFile.id ? { ...f, status: (errorMessage === 'Conflict detected.') ? 'conflict' : 'error', progress: 0, error: errorMessage } : f
                    )
                );
                // Remove from active syncs ref
                 delete activeSyncs.current[failedFile.id];
                 // Check if all active syncs are done (either success or error)
                  if (Object.keys(activeSyncs.current).length === 0) {
                      console.log("All sync attempts finished.");
                      // If any files are still in error or conflict, the overall status is error/conflict
                       if (files.some(f => f.status === 'error' || f.status === 'conflict')) {
                           setOverallStatus('error'); // Could be 'partially-synced-with-errors' etc.
                       } else {
                           setOverallStatus('completed');
                       }
                  } else {
                       // If some syncs are still active, keep overall status as 'syncing' or 'error' if a new error occurred
                       setOverallStatus(prevStatus => (prevStatus === 'syncing' || files.some(f => f.status === 'error' || f.status === 'conflict')) ? 'error' : prevStatus);
                  }
            }
        );
        // Store the cleanup function in the ref
        activeSyncs.current[file.id] = cleanup;
    });
  };

    // Cleanup intervals on component unmount
    useEffect(() => {
        const currentActiveSyncs = activeSyncs.current;
        return () => {
            Object.values(currentActiveSyncs).forEach(clearInterval);
        };
    }, []); // Empty dependency array ensures this runs only on mount and unmount


  const contextValue = {
    files,
    overallStatus,
    isLoading,
    startSync,
    // pauseSync // Add this when implementing pause
  };

  return (
    <SyncContext.Provider value={contextValue}>
      {children}
    </SyncContext.Provider>
  );
};

export default SyncProvider;