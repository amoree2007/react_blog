import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../Components/context/Context";
import axios from "axios";

function Login() {
  const { dispatch, isFetching, url } = useContext(ThemeContext);
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(url + "/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Your Username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Your Password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to={"/register"} className="link">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
