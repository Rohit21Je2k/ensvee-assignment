import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthContext } from "./util/context/auth-context";
import { useAuth } from "./util/hooks/auth-hook";
import Authenticate from "./components/Authenticate/Authenticate";
import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";

import "./styles/main.css";

function App() {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Authenticate />} />
          {token && <Route path="/home" element={<Home />} />}
          <Route path="*" element={<Redirect />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
