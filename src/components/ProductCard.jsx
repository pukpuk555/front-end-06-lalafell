import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ name, img, price, describe }) {
  return (
    <Link
      to={`/product/${name}`}
      className="hover:scale-105 transition duration-500"
    >
      <div className="card md:w-full bg-base-100 shadow-xl w-[200px]">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{describe}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price} Bath</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
