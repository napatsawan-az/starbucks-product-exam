const ProductCard = ({ product }) => {
  return (
    <div className="card w-full bg-base-100 rounded-none">
      <figure>
        <img src={product.image_url} alt={product.name} />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title mt-2 font-bold text-base">{product.name}</h2>
        <div className="card-actions mb-6">
          <div className="badge badge-neutral font-bold text-xs">
            {product.category}
          </div>
        </div>
        <p>{product.price} Baht</p>
      </div>
    </div>
  );
};

export default ProductCard;
