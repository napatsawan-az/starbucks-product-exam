import { Routes, Route } from "react-router-dom";
import { Product, ProductDetail } from "../pages";

const RouthPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default RouthPath;
