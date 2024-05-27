const ProductFilter = ({ handleFilterChange }) => {
  const categories = [
    "Whole Bean",
    "Starbucks Reserve",
    "Starbucks VIA",
    "Starbucks Origami",
    "Teavana",
    "Syrup",
  ];
  const roasts = ["Blonde", "Medium", "Dark"];
  const caffeines = ["Decaf", "Regular"];

  return (
    <>
      <div className="collapse bg-base-200 md:bg-white rounded-none md:collapse-open">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-bold">Filter</div>
        <div className="collapse-content">
          <div>
            <p className="font-bold my-3 border-b-2 leading-10">Categories</p>
            {categories.map((category) => (
              <label key={category} className="flex mb-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-success rounded-none mr-2"
                  value={category}
                  onChange={() => handleFilterChange(category, "category")}
                />
                {category}
              </label>
            ))}
          </div>
          <div>
            <p className="font-bold my-3 border-b-2 leading-10">Roast</p>
            {roasts.map((roast) => (
              <label key={roast} className="flex mb-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-success rounded-none mr-2"
                  value={roast}
                  onChange={() => handleFilterChange(roast, "roast")}
                />
                {roast}
              </label>
            ))}
          </div>
          <div>
            <p className="font-bold my-3 border-b-2 leading-10">Caffeine</p>
            {caffeines.map((caffeine) => (
              <label key={caffeine} className="flex mb-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-success rounded-none mr-2"
                  value={caffeine}
                  onChange={() => handleFilterChange(caffeine, "caffeine")}
                />
                {caffeine}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
