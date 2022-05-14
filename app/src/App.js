import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Main from "./components/main/Main.js";
import useToken from "./useToken.js";

function App() {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/mastermind" element={<Main/>}/>
          <Route path="/" element={<Login setToken={setToken} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
