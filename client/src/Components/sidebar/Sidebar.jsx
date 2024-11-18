import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/Context";
import "./sidebar.css";
import one from "../../imgs/565640fd-fa8e-4d75-82f0-489815cce13f.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cats, setCat] = useState([]);
  const { url } = useContext(ThemeContext);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get(url + "/categories");
      setCat(res.data);
    };
    getCat();
  }, [url]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={one} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed
          debitis aut repellat voluptatem praesentium odio?Officiis,
          necessitatibus, explicabo provident sed?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, i) => (
            <Link to={`/?cat=${c.name}`} className="link" key={i}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
