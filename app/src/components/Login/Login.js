//import '.././App.css';
import { useState } from "react";
import PropTypes from 'prop-types'
//import axios from "axios";

const Login = ({ setToken }) => {
  const [userLogin, setUser] = useState("");
  const [userPassword, setPassword] = useState("");

  async function loginUser(credentials) {
    return fetch("http://localhost:3001/login", {
      method: "POST",
      mode:'no-cors',
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  // async function handleSubmitUser(e) {
  //   e.preventDefault();
  //   var valueObj = await loginUser({ userLogin, userPassword });
  //   setToken(valueObj);
  // }
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      userLogin,
      userPassword
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Ready to master the mind?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email:
          <br />
          <input
            id="username"
            type="text"
            value={userLogin}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            id="password"
            type="text"
            value={userPassword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <button id="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default Login;
