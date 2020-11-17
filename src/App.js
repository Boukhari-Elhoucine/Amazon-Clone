import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import "./App.css";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebaseConfig";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
function App() {
  const [{ basket }, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51HQDhvLKgDia2s4j59Tdsquu1HO7YwmaCXJTLkcM6nlzh0tKQxoS6W3MhCWjcPUp4nhJBpcvG9fkZt9BvjVpwCyP004tg0Fm1g"
  );
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        dispatch({
          type: "set_user",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/check">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
