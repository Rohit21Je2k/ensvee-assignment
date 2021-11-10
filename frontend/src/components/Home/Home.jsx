import React, { useContext } from "react";

import { AuthContext } from "../../util/context/auth-context";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export default function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="home-page">
      <div className="wrapper">
        <h1 className="home-page__title">User</h1>
        <h3 className="home-page__user">Hello,</h3>
        <button onClick={handleLogout} className="home-page__logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}
