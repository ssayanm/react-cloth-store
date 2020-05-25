import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CartItemComponent from "./CartItemComponent";

const CartDropDownComponent = () => {
  const { cartItems } = useContext(GlobalContext);
  return (
    <div className="w-48 h-72 flex flex-col p-5 absolute z-10 right-0 bg-white mx-16 border-2 mt-20">
      <div className="flex flex-col overflow-scroll h-48">
        {cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <button className="mt-auto bg-black text-white p-2">
        Go to Checkout
      </button>
    </div>
  );
};

export default CartDropDownComponent;
