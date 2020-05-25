import React from "react";

const CheckoutItemComponent = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="w-full flex mb-2 h-16 items-center justify-center">
      <img className="w-10 h-10 object-cover" src={imageUrl} alt={name} />
      <div className="w-2/3 flex flex-col justify-center items-start px-4 py-2">
        <span className="text-xs"> {name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CheckoutItemComponent;
