import React from "react";

import AuthenticateFormContainer from "./AuthenticateFormContainer";
import AuthenticateSidebar from "./AuthenticateSidebar";

import "./Authenticate.css";

export default function Authenticate() {
  return (
    <div className="authenticate-page">
      {/* form container */}
      <AuthenticateFormContainer />
      {/* sidebar */}
      <AuthenticateSidebar />
    </div>
  );
}
