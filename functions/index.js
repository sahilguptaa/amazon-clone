const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HdZg2FVLFZ2UfnLYoI4Mi1rQlvNNMacfRnq6S9bH8cfPOThPdTXMMRNkGcIv3z0HNqlCa0TU2NadY0OaAUbmQbM00uxwKgPHI"
);

// API

// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes

app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment req received: ", total);
  const paymentIntent = await stripe.paymentIntents
    .create({
      description: "testing functionality",
      name: "test name",
      //   address: "test address",
      amount: total, // subUnits of the currency
      currency: "usd",
      //   last_payment_error: {
      //     payment_method: {
      //       billing_details: {
      //         address: {},
      //         name: "test name",
      //       },
      //     },
      //   },
    })
    .then()
    .catch((err) => console.log(err));

  // OK & created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);
