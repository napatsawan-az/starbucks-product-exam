import { useParams } from "react-router-dom";
import { Layout, Loading, Rating } from "../../components";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/product";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(productId);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <Loading />;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Layout>
        <div className="md:flex max-w-[1080px] mx-auto my-10 gap-5 p-3 md:px-4">
          <div className="md:w-[532px]">
            <img src={product.image_url} alt={product.name} />
          </div>
          <div className="md:w-[532px] mt-3 md:mt-0">
            <h1 className="font-semibold text-2xl">{product.name}</h1>
            <div className="card-actions my-5">
              <div className="badge badge-neutral font-bold text-xs">
                {product.category}
              </div>
            </div>
            <p>{product.description}</p>

            <div className="mt-7">
              <h2 className="font-semibold text-xl mb-3">Coffee Profile</h2>
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                <div>
                  <p className="font-semibold mb-1">Acidity</p>
                  <Rating score={product.acidity} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Body</p>
                  <Rating score={product.body} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Processing Method</p>
                  <p>{product.processing_method}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Tasting Notes</p>
                  <p>{product.tasting_notes}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Complementary flavors</p>
                  <p>{product.complementary_flavors}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Region</p>
                  <p>{product.region}</p>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="font-semibold text-xl">Price</h2>
              <p>{product.price} Baht</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
