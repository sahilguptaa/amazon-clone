import React from "react";
import CheckoutProduct from "../Checkout/BasketItem/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../axios";

const Payment = () => {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);
  const [succeeded, setSucceeded] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [clientSecret, setClientSecret] = React.useState(true);

  React.useEffect(() => {
    const getClientSecret = async () => {
      const totalValue = getBasketTotal() * 100;
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalValue}`,
      });

      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [state.basket]);

  console.log("clientSecret", clientSecret);

  const stripe = useStripe();
  const elements = useElements();

  const getBasketTotal = () =>
    state.basket?.reduce((amount, item) => item.price + amount, 0.0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal()}
                  displayType="text"
                  prefix="$"
                  thousandSeperator={true}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>{"Processing"}</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
