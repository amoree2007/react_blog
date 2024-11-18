import { Link } from "react-router-dom";
import "./topbar.css";
import one from "../../imgs/Long Hair Don'ts_ Common Mistakes to Avoid.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";

function Topbar() {
  const { user, dispatch } = useContext(ThemeContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"} className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/"} className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/"} className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/write"} className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to={"/setting"}>
            <img src={one} alt="" className="topImg" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to={"/login"} className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to={"/register"} className="link">
                REGIARER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
