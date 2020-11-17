import React, { useState } from "react";
import "./Login.css";
import Logo from "./amazon_PNG24.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebaseConfig";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((respone) => history.push("/"))
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} alt="" />
      </Link>
      <div className="login__form">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="signIn">
            Sign in
          </button>
          <br />
          <button onClick={register} className="createAccount">
            Create an Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
