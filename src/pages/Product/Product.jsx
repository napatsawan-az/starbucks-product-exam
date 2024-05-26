import { useEffect, useState } from "react";
import { Hero, Layout, ProductCard, ProductSearch } from "../../components";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/product";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParams = { search: searchQuery };
        const filteredProducts = await getProducts(queryParams);
        setProducts(filteredProducts);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        <Hero />
        <div className="max-w-[1080px] mx-auto my-3 md:mt-10 md:flex p-3">
          <div className="md:hidden mb-3">
            <ProductSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="w-full md:w-[258px] mr-3 bg-red-300">
            This is aside
          </div>
          <div className="md:w-[806px]">
            <div className="hidden md:flex gap-4">
              <ProductSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <button className="hidden w-[91px] px-4 py-2 bg-stbLightGray text-white rounded-full">
                Search
              </button>
            </div>
            {error ? (
              <p className="mt-5 ml-10">
                No products found for <br />
                <span className="font-bold">{searchQuery}</span>
              </p>
            ) : (
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => {
                  return (
                    <Link key={product.id} to={`/products/${product.id}`}>
                      <ProductCard product={product} />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
