import axios from "axios";

const baseURL = "https://66517ced20f4f4c44277d17a.mockapi.io/api/product";

export const getProducts = async (queryParams) => {
  try {
    const response = await axios.get(baseURL, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
};
