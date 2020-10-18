import React from "react";
import CheckoutProduct from "../Checkout/BasketItem/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{state.basket?.length}</Link>) items
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{state.user?.email}</p>
            <p>16-B, Palam Vihar</p>
            <p>Ambala cantt</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {state.basket?.map((item) => (
              <CheckoutProduct {...item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
