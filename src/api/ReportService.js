import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reports';  // Ajusta la URL si tu backend usa otro puerto

export const getReports = () => axios.get(API_URL);
export const downloadReport = (id) => axios.get(`${API_URL}/${id}/download`, { responseType: 'blob' });
export const downloadComparedReport = () => axios.post(`${API_URL}/compare`, {}, { responseType: 'blob' });