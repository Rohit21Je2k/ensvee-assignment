import React, { useContext } from "react";

import Users from "../Users/Users";
import { AuthContext } from "../../util/context/auth-context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="home-page">
      Home
      <Users />
      <button onClick={handleLogout} className="home-page__logout-btn">
        Logout
      </button>
    </div>
  );
}
