const ProductCard = ({ product }) => {
  return (
    <div className="card w-full h-full bg-base-100 rounded-none shadow-md">
      <figure>
        <img src={product.image_url} alt={product.name} />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title mt-2 font-bold text-base ml-2">
          {product.name}
        </h2>
        <div className="card-actions mb-6">
          <div className="badge badge-neutral font-bold text-xs ml-2">
            {product.category}
          </div>
        </div>
      </div>
      <p className="ml-2 mb-2">{product.price} Baht</p>
    </div>
  );
};

export default ProductCard;
