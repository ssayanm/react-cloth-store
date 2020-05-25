import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { GlobalContext } from "../context/GlobalState";

const CartIconComponent = () => {
  const { toggleCartHidden } = useContext(GlobalContext);

  return (
    <div
      className="flex justify-center align-top w-20 h-20 bold cursor-pointer"
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="w-6" />
      <span className="absolute mt-8 pt-1 text-xs font-bold">10</span>
    </div>
  );
};

export default CartIconComponent;
