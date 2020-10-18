import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ image, id, title, price, rating = 0 }) => {
  const [state, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <button className="checkoutProduct__remove" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
