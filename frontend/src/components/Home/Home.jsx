import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../util/context/auth-context";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export default function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const apiUrl = "https://ensvee.herokuapp.com/api/users";

  useEffect(() => {
    if (!auth.userId) {
      return;
    }
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        userId: auth.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          return alert(data.message);
        }
        setUser(data);
      });
  }, [auth]);
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="home-page">
      <div className="wrapper">
        <h1 className="home-page__title">User</h1>
        <h3 className="home-page__user">Hello, {user.name}</h3>
        <button onClick={handleLogout} className="home-page__logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}
