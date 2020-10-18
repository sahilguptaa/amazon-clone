import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./BasketItem/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal/Subtotal";

const Checkout = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/infographic/1500x300._CB1198675309_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h3>Hello, {state.user?.email}</h3>
          <h2>Your shopping basket</h2>
          {state.basket.map((item) => (
            <CheckoutProduct {...item} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal basket={state.basket} />
      </div>
    </div>
  );
};

export default Checkout;
