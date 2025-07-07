import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/reports'; // Asegúrate de que termina en /api/v1/reports

export const fetchReports = async () => {
  const response = await axios.get(`${API_URL}/history`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

export const createReport = async () => {
  const response = await axios.get(`${API_URL}/generate`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

export const deleteReport = async (id) => {
  await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};
