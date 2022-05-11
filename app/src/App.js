import { BrowserRouter, Route } from "react-router-dom";
//import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login.js";
import Main from "./components/main/Main.js";
import useToken from "./useToken.js";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <h1>MasterMind</h1>
      <BrowserRouter>
        <Route path="/mastermind">
          <Main />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
