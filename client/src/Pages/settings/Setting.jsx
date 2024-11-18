import Sidebar from "../../Components/sidebar/Sidebar";
import "./setting.css";
import one from "../../imgs/pexels-njeromin-19161533.jpg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Components/context/Context";
import axios from "axios";

function Setting() {
  const { user, url } = useContext(ThemeContext);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setsuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateduser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateduser.profilePic = filename;
      try {
        await axios.post(url + "/upload", data);
      } catch (e) {}
    }
    try {
      await axios.put(url + "/users/" + user._id, updateduser);
      setsuccess(true);
    } catch (e) {}
  };
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingPP">
            <img src={one} alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>UserName</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="sttingSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", margin: "20px" }}
            >
              Profile has been Updated
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
