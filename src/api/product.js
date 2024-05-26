import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://66517ced20f4f4c44277d17a.mockapi.io/api/product"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
