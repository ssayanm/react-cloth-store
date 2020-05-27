import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { getCartTotal } from "../utils/cartUtils";
import CheckoutItemComponent from "../components/CheckoutItemComponent";

const CheckoutPage = () => {
  // console.log(props);
  const { cartItems } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <div className="container w-2/4 flex flex-col items-center">
        <div className="uppercase w-full flex justify-between border-b-2 border-color: #edf2f7;">
          <div className="w-10">
            <span>Product</span>
          </div>
          <div className="w-10">
            <span>Description</span>
          </div>
          <div className="w-10">
            <span>Quantity</span>
          </div>
          <div className="w-10">
            <span>Price</span>
          </div>
          <div className="w-10">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="mt-5 ml-8 text">TOTAL: $20</div>
      </div>
    </React.Fragment>
  );
};

export default CheckoutPage;
