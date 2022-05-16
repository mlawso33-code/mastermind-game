import "./registration.css";
import { useNavigate } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
  let navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSignIn(){
    navigate("../login", { replace: true })
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PASS_REGEX.test(password);
    const match = password === matchPass;
    setValidPass(result);
    setValidMatch(match);
  }, [password, matchPass]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPass]);

  return (
    <section className="registration">
      <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
        {errMsg}
      </p>
      <h1>Registration</h1>
      <form>
        <label htmlFor="username">
          Username:
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 20 characters.
          <br />
          Must start with letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
        <label htmlFor="password">
          Password:{" "}
          <span className={validPass ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPass || !password ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="text"
          id="password"
          onChange={(e) => setPass(e.target.value)}
          required
          onFocus={() => setPassFocus(true)}
          onBlur={() => setPassFocus(false)}
        />
        <p
          id="passnote"
          className={passFocus && !validPass ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>

        <label htmlFor="confirm_pwd">
          Confirm Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validMatch && matchPass ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validMatch || !matchPass ? "hide" : "invalid"}
          />
        </label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPass(e.target.value)}
          value={matchPass}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p
          id="confirmnote"
          className={matchFocus && !validMatch ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>

        <button
          disabled={!validName || !validPass || !validMatch ? true : false}
        >
          Sign Up
        </button>
      </form>
      <p>
        Already registered?
        <br />
        <span className="line">
          <a onClick={()=> handleSignIn()}>Sign In</a>
        </span>
      </p>
    </section>
  );
};

export default Registration;
