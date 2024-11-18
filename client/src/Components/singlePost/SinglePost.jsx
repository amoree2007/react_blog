import { useContext, useEffect, useState } from "react";
import "./singlepost.css";
import { ThemeContext } from "../context/Context";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function SinglePost() {
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(ThemeContext);
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { url } = useContext(ThemeContext);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [updateMode, setupdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(url + "/posts/" + path);
      setPost(res.data);
      settitle(res.data.title);
      setdesc(res.data.desc);
    };
    getPost();
  }, [path, url]);

  const handleDelete = async () => {
    try {
      await axios.delete(url + `/posts/${post._id}`, {
        data: { username: user.username },
      });
      setupdateMode(false);
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(url + `/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => settitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  class="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setupdateMode(true)}
                ></i>
                <i
                  class="singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlepostbutton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
