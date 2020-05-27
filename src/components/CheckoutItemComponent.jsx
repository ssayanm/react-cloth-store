import React from "react";

const CheckoutItemComponent = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="w-full flex mb-2 h-40 items-center">
      <div className="w-1/5 pr-2">
        <img className="w-32 h-32 object-cover" src={imageUrl} alt={name} />
      </div>
      <span className="w-1/4"> {name}</span>
      <span className="w-1/4 flex">
        <div className="cursor-pointer">&#10094;</div>
        <span className="mx-2">{quantity}</span>
        <div className="cursor-pointer">&#10095;</div>
      </span>

      <span className="w-1/5">{price}</span>
      <div className="pl-2 cursor-pointer">&#10005;</div>
    </div>
  );
};

export default CheckoutItemComponent;
