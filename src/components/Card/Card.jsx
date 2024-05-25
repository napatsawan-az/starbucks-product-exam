const Card = () => {
  return (
    <div className="card w-full bg-base-100 rounded-none">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title mt-2 font-bold text-base">Shoes!</h2>
        <div className="card-actions mb-6">
          <div className="badge badge-neutral font-bold text-xs">Fashion</div>
          <div className="badge badge-neutral font-bold text-xs">Products</div>
        </div>
        <p className="">750 Baht</p>
      </div>
    </div>
  );
};

export default Card;
