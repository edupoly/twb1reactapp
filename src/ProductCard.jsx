import React from "react";

function ProductCard({ product }) {
  return (
    <div className="w-25 border p-2">
      <h4>{product.title}</h4>
      <img src={product.thumbnail} className="" style={{ width: "50%" }} />
    </div>
  );
}

export default ProductCard;
