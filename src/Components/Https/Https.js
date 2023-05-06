import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  //   headers: {
  //     Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  //   },
});

// Categories

export const fetchCategories = () => api.get("/api/categories");

export const fetchArticles = (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

export const fetchBySlug = async (queryString: string) => {
  api.get(`/api/articles?${queryString}`);
};

export const API_BASE_URL = "https://urchin-app-ymkhz.ondigitalocean.app";
