import "./post.css";
import img from "../../imgs/pexels-njeromin-12734294.jpg";
import { Link } from "react-router-dom";
function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img src={img} alt="" className="postImg" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="poatCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
