import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product_id, name, img, price, describe }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = (e) => {
    e.preventDefault(); // Prevent link click navigation
    setShowFullDescription(!showFullDescription);
  };

  const getShortDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="hover:scale-105 transition duration-500">
      <Link to={`/product/${product_id}`} className="card md:w-full bg-base-100 shadow-xl w-[200px]">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {showFullDescription ? describe : getShortDescription(describe, 4)}
            {describe.split(" ").length > 4 && (
              <span
                onClick={handleToggleDescription}
                className="text-blue-500 cursor-pointer ml-2"
              >
                {showFullDescription ? "Read less" : "Read more"}
              </span>
            )}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price} Bath</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;


