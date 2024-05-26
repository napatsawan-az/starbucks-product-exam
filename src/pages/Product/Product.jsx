import { useEffect, useState } from "react";
import { Hero, Layout, ProductCard, ProductSearch } from "../../components";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/product";

const Product = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        <Hero />
        <div className="max-w-[1080px] mx-auto my-3 md:mt-10 md:flex p-3">
          <div className="md:hidden mb-3">
            <ProductSearch />
          </div>
          <div className="w-full md:w-[258px] mr-3 bg-red-300">
            This is aside
          </div>
          <div className="md:w-[806px]">
            <div className="hidden md:flex gap-4">
              <ProductSearch />
              <button className="hidden w-[91px] md:block px-4 py-2 bg-stbLightGray text-white rounded-full">
                Search
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                return (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
