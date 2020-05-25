import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CartItemComponent from "./CartItemComponent";

const CartDropDownComponent = () => {
  const { cartItems } = useContext(GlobalContext);
  return (
    <div className="w-48 flex flex-col p-5 absolute z-10 right-0 bg-gray-200 mx-10 border-2 mt-10">
      {cartItems.map((cartItem) => (
        <CartItemComponent key={cartItem.id} cartItem={cartItem} />
      ))}
      <button className="mt-auto bg-black text-white">Go to Checkout</button>
    </div>
  );
};

export default CartDropDownComponent;
