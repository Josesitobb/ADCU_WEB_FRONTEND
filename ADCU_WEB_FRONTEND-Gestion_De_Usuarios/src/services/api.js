import axios from 'axios';
import { getAuthToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Interceptor para agregar el token a todas las solicitudes
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['x-access-token'] = token; // Algunas APIs esperan el token en este header
  }
  return config;
});

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/login'; // Redirigir al login
    }
    return Promise.reject(error);
  }
);

export default api;