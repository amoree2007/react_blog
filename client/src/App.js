import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Setting from "./Pages/settings/Setting";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import { ThemeContext } from "./Components/context/Context";

function App() {
  const { user } = useContext(ThemeContext);
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/setting" element={user ? <Setting /> : <Register />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
