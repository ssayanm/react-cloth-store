import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { GlobalContext } from "../context/GlobalState";
import { selectCartItemsCount } from "../utils/cartUtils";

const CartIconComponent = () => {
  const { toggleCartHidden, cartItems } = useContext(GlobalContext);

  return (
    <div
      className="flex justify-center align-top w-10 h-10 bold cursor-pointer"
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="w-8 h-8" />
      <span className="absolute mt-2 pt-1 text-xs font-bold">
        {selectCartItemsCount(cartItems)}
      </span>
    </div>
  );
};

export default CartIconComponent;
