import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = ({ basket = [] }) => {
  // const getBasketTotal = () => {
  //   let sum = 0;
  //   basket.forEach((item) => {
  //     sum += item.price;
  //   });
  //   return sum;
  // };

  const getBasketTotal = () =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="subtotal__input" type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal()}
        displayType="text"
        prefix="$"
        thousandSeperator={true}
      />
      <button className="subtotal__checkout">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
