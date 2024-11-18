import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Components/context/Context";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const { url } = useContext(ThemeContext);
  const { search } = useLocation();

  useEffect(() => {
    const featchPosts = async () => {
      const res = await axios.get(url + "/posts" + search);
      setPosts(res.data);
    };
    featchPosts();
  }, [url, search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
