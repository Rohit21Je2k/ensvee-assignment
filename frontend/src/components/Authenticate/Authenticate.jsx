import React, { useState } from "react";

import AuthenticateFormContainer from "./AuthenticateFormContainer";
import AuthenticateSidebar from "./AuthenticateSidebar";

import "./Authenticate.css";

const apiURL = "https://ensvee.herokuapp.com";

export default function Authenticate() {
  const [isLoginState, setIsLoginState] = useState(true);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let reqFormValues = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.repeatPassword,
      };

      let reqUrl = `${apiURL}/api/users/signup`;

      if (isLoginState) {
        reqFormValues = {
          email: formValues.email,
          password: formValues.password,
        };
        reqUrl = `${apiURL}/api/users/login`;
      }

      const response = await fetch(reqUrl, {
        method: "POST",
        body: JSON.stringify(reqFormValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.message) {
        alert(responseData.message);
      }
      if (responseData.token) {
        alert(isLoginState ? "Logged in" : "User created");
      }
    } catch (err) {
      alert("Fetching Error");
      console.log(err);
    }
  };

  return (
    <div className="authenticate-page">
      {/* form container */}
      <AuthenticateFormContainer
        isLoginState={isLoginState}
        setIsLoginState={setIsLoginState}
        formValues={formValues}
        setFormValues={setFormValues}
        formSubmitHandler={formSubmitHandler}
      />
      {/* sidebar */}
      <AuthenticateSidebar
        isLoginState={isLoginState}
        setIsLoginState={setIsLoginState}
      />
    </div>
  );
}
