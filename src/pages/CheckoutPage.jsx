import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// import { getCartTotal } from "../utils/cartUtils";
import CheckoutItemComponent from "../components/CheckoutItemComponent";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">TOTAL: ${cartTotal}</div>
      </div>
    </React.Fragment>
  );
};

export default CheckoutPage;
