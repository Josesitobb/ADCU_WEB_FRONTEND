import api from "./api";

export const getDocuments = async () => {
  const response = await api.get("/Documents");
  return response.data.data;
};

export const getContractors = async () => {
  try {
    const response = await api.get("/Users");
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching contractors:", error);
    throw error;
  }
};

export const getDocumentById = async (id) => {
  const response = await api.get(`/Documents/${id}`);
  return response.data.data;
};

export const createDocument = async (userContract, formData) => {
  const response = await api.post(`/Documents/${userContract}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

export const updateDocument = async (id, userContract, formData) => {
  const response = await api.put(`/Documents/${id}/${userContract}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

export const deleteDocument = async (id, userContract) => {
  const response = await api.delete(`/Documents/${id}/${userContract}`);
  return response.data.data;
};
