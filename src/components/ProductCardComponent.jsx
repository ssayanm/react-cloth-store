import React from "react";

const ProductCardComponent = ({ product }) => {
  return (
    <div className="m-3 max-w-sm rounded shadow-lg text-center overflow-hidden">
      <img
        className="h-72 w-64 object-cover"
        src={product.imageUrl}
        alt="collections"
      />
      <div className="px-6 py-4 w-64">
        <div className="text-xl mb-2"> {product.name}</div>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCardComponent;
