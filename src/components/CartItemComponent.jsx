import React from "react";

const CartItemComponent = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="m-3 max-w-sm rounded shadow-lg text-center overflow-hidden">
      <img className="h-72 w-64 object-cover" src={imageUrl} alt={name} />
      <div className="py-1 flex px-4 justify-between text">
        <div> {name}</div>
        <div>
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
