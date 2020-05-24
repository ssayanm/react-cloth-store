import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const ProductCardComponent = ({ product }) => {
  const { addItem } = useContext(GlobalContext);
  const [cartItem, setCartItem] = useState("");
  // const { name, price, imageUrl } = product;
  return (
    <div className="m-3 max-w-sm rounded shadow-lg text-center overflow-hidden">
      <img
        className="h-72 w-64 object-cover"
        src={product.imageUrl}
        alt="collections"
      />
      <div className="py-1 flex px-4 justify-between text">
        <div> {product.name}</div>
        <div> ${product.price}</div>
      </div>
      <button
        onClick={() => addItem(product)}
        className="my-4 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardComponent;
