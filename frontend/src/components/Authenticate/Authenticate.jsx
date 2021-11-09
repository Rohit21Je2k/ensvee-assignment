import React, { useState } from "react";

import AuthenticateFormContainer from "./AuthenticateFormContainer";
import AuthenticateSidebar from "./AuthenticateSidebar";

import "./Authenticate.css";

export default function Authenticate() {
  const [authenticateState, setAuthenticateState] = useState("login");
  const toggleAuthenticateState = () => {
    setAuthenticateState((prevState) => {
      return prevState === "login" ? "signup" : "login";
    });
  };
  return (
    <div className="authenticate-page">
      {/* form container */}
      <AuthenticateFormContainer viewState={authenticateState} />
      {/* sidebar */}
      <AuthenticateSidebar formStateHandler={toggleAuthenticateState} />
    </div>
  );
}
