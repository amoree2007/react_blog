import { Link } from "react-router-dom";
import "./register.css";
import { useContext, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../../Components/context/Context";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { url } = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    setError(false);
    try {
      e.preventDefault();
      const res = await axios.post(url + "/auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Your UserName..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to={"/login"}>
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: " 15px" }}>
          Somthing went wrong!
        </span>
      )}
    </div>
  );
}

export default Register;
