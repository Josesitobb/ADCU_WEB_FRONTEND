// src/contexts/SyncContext.js
import { createContext, useContext } from 'react';

// Define the shape of the context state and actions
const SyncContext = createContext({
  files: [], // Array of file objects { id, name, status, progress, lastSynced, etc. }
  overallStatus: 'idle', // 'idle', 'syncing', 'paused', 'completed', 'error'
  startSync: () => {}, // Function to trigger synchronization
  pauseSync: () => {}, // Function to pause synchronization (optional for this basic version)
  // Add other actions like cancel, resolve conflict, etc. if needed
});

// Custom hook to easily consume the context
export const useSync = () => useContext(SyncContext);

export default SyncContext;