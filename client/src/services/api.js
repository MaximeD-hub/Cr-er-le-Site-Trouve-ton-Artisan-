// Service API - Appels vers le back-end

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "trouve_ton_artisan_api_key",
  },
});

export const getArtisans = (params = {}) => apiClient.get("/artisans", { params });
export const getArtisanById = (id) => apiClient.get(`/artisans/${id}`);
export const getTopArtisans = () => apiClient.get("/artisans/top");
export const getCategories = () => apiClient.get("/categories");
export const getSpecialites = (categorieId = null) => {
  const params = categorieId ? { categorieId } : {};
  return apiClient.get("/specialites", { params });
};
export const sendContact = (formData) => apiClient.post("/contact", formData);

export default apiClient;