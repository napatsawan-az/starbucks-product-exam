import { useEffect, useState } from "react";
import {
  Hero,
  Layout,
  ProductCard,
  ProductFilter,
  ProductSearch,
} from "../../components";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/product";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectRoast, setSelectRoast] = useState([]);
  const [selectCaffeine, setSelectCaffeine] = useState([]);
  const pageNumbers = [1, 2, 3];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParams = {
          search: searchQuery,
          page: currentPage,
          limit: 12,
          category: selectCategory,
          roast: selectRoast,
          caffeine: selectCaffeine,
        };
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
  }, [searchQuery, currentPage, selectCategory, selectRoast, selectCaffeine]);

  const handleFilterChange = (value, filterType) => {
    const setFilterState = {
      category: setSelectCategory,
      roast: setSelectRoast,
      caffeine: setSelectCaffeine,
    }[filterType];

    setFilterState((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value]
    );

    setCurrentPage(1);
  };

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
          <div className="w-full md:w-[258px] mr-3">
            <ProductFilter handleFilterChange={handleFilterChange} />
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
              <p className="mt-5 md:ml-10">
                Sorry, we couldn’t find any coffees that match your selection.
                Please try again.
              </p>
            ) : (
              <>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                      <ProductCard product={product} />
                    </Link>
                  ))}
                </div>
                <div className="join flex justify-center gap-3 mt-7">
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      className={`btn btn-circle ${
                        page === currentPage
                          ? "btn-active bg-stbGreen hover:bg-stbGreen text-white"
                          : ""
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
