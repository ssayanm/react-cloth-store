import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { getCartTotal } from "../utils/cartUtils";
import CheckoutItemComponent from "../components/CheckoutItemComponent";

const CheckoutPage = () => {
  // console.log(props);
  const { cartItems } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <div className="container w-2/4 flex flex-column align-middle">
        <div className="uppercase w-full flex justify-between border-b-2 border-color: #edf2f7;">
          <div className="">
            <span>Product</span>
          </div>
          <div className="">
            <span>Description</span>
          </div>
          <div className="">
            <span>Quantity</span>
          </div>
          <div className="">
            <span>Price</span>
          </div>
          <div className="">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <div>
            <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
            <div className="my-4 text">TOTAL: ${getCartTotal(cartItem)}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CheckoutPage;
