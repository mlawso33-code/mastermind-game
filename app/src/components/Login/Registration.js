import '../../index.css'
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
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

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, []);

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
          <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
          <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
        type="text"
        id="username"
        ref={userRef}
        autocomplete="off"
        onChange={(e) => setUser(e.target.value)}
        required
        onFocus={() => setUserFocus(true)}
        onBlur={()=> setUserFocus(false)}/>
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle} />
          4 to 20 characters.<br/>
          Must start with letter.<br/>
          Letters, numbers, underscores, hyphens allowed.
        </p>
      </form>
    </section>
  );
};

export default Registration;