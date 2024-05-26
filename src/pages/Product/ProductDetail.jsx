import { Layout, Rating } from "../../components";

const ProductDetail = () => {
  return (
    <>
      <Layout>
        <div className="md:flex max-w-[1080px] mx-auto my-10 gap-5 p-3 md:px-4">
          <div className="md:w-[532px]">
            <img
              src="https://www.starbucks.co.th/stb-media/2024/04/Summer1_STARBUCKS_SUN-DRIED_BRAZIL_CARMO_DE_MINAS_2024_1080x1080_250.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[532px] mt-3 md:mt-0">
            <h1 className="font-semibold text-2xl">
              Starbucks® Single-Origin Sun-Dried Brazil Carmo De Minas
            </h1>
            <div className="card-actions my-5">
              <div className="badge badge-neutral font-bold text-xs">
                Whole Bean
              </div>
            </div>
            <p>
              Due to the unique geography and climate conditions of the
              southeastern region of carmo de minas, the most prominent
              processing method is sun-dried, which intrinsically carries the
              least amount of impact to the environment by using very little
              water. This coffee has a subtle acidity and a softer profile that
              highlights tropical fruits and sweet hazelnuts with a smooth
              caramelly texture that is best paired with caramel and chocolate.
            </p>

            <div className="mt-7">
              <h2 className="font-semibold text-xl mb-3">Coffee Profile</h2>
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                <div>
                  <p className="font-semibold mb-1">Acidity</p>
                  <Rating score={3} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Body</p>
                  <Rating score={0} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Processing Method</p>
                  <p>Natural</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Tasting Notes</p>
                  <p>Hazelnut, Dried fruit</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Complementary flavors</p>
                  <p>Caramel, Chocolate</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Region</p>
                  <p>Latin America</p>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="font-semibold text-xl">Price</h2>
              <p>750 Baht</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
