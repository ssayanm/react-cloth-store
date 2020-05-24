import React from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIconComponent = () => {
  return (
    <div className="flex justify-center align-top w-20 h-20 bold">
      <ShoppingIcon className="w-6 h-6" />
      <span className="absolute py-2 text-xs font-bold">12</span>
    </div>
  );
};

export default CartIconComponent;
