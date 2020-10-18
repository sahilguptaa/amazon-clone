import React from "react";
import "./App.css";
import { Header } from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
