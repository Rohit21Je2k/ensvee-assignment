import React from "react";

// components
import Input from "../Input/Input";
// assets
import steamLogo from "../../assets/steam-logo.svg";
import vkLogo from "../../assets/vk-social-network-logo.svg";
// css
import "./AuthenticateFormContainer.css";

export default function AuthenticateFormContainer(props) {
  const {
    isLoginState,
    setIsLoginState,
    formValues,
    setFormValues,
    formSubmitHandler,
  } = props;

  const toggleFormState = () => {
    setIsLoginState((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="authenticate-form-container">
      <div className="authenticate-form-container__wrapper">
        <div className="authenticate-form-container__heading">
          <div className="authenticate-form-container__heading-title">
            {isLoginState ? "Sign In" : "Sign Up"}
          </div>
          <div className="authenticate-form-container__heading-msg">
            {isLoginState ? "Welcome, we missed you!" : "Don't have an account"}
          </div>
        </div>
        <form className="authenticate-form-container__form">
          <div className="authenticate-form-container__form__inputs">
            {isLoginState || (
              <Input
                name="name"
                label="Full Name"
                type="text"
                placeholder="Enter your name"
                value={formValues.name}
                setFormValues={setFormValues}
              />
            )}
            <Input
              name="email"
              label="Your Email"
              type="email"
              placeholder="Enter your email"
              value={formValues.email}
              setFormValues={setFormValues}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formValues.password}
              setFormValues={setFormValues}
              autocomplete="on"
            />
            {isLoginState || (
              <Input
                name="repeatPassword"
                label="Repeat Password"
                type="password"
                placeholder="Enter your password"
                value={formValues.repeatPassword}
                setFormValues={setFormValues}
                autocomplete="on"
              />
            )}
          </div>
          {isLoginState && (
            <div className="authenticate-form-container__form-cta">
              <div className="authenticate-form-container__form-cta__remember-me">
                <span className="checkmark"></span>
                Remember me
              </div>
              <div className="authenticate-form-container__form-cta__forgot-password">
                Forgot Password ?
              </div>
            </div>
          )}
          <button
            className="authenticate-form-container__form__submit-btn"
            onClick={formSubmitHandler}
            style={
              isLoginState
                ? null
                : {
                    background:
                      "linear-gradient(180deg, #7BB4F8 0%, #73AAEB 100%)",
                  }
            }
          >
            {isLoginState ? "Sign In" : "Sign Up"}
          </button>

          {isLoginState && (
            <div className="authenticate-form-container__form__other-options">
              <span className="authenticate-form-container__form__other-options__msg">
                or continue with
              </span>
              <div className="authenticate-form-container__form__other-options__btns">
                <button className="authenticate-form-container__form__other-options__steam-btn">
                  <img src={steamLogo} />
                  Sign in with Steam
                </button>
                <button className="authenticate-form-container__form__other-options__vk-btn">
                  <img src={vkLogo} />
                </button>
              </div>
            </div>
          )}
          <span
            className="authenticate-form-container__form-switch"
            onClick={toggleFormState}
          >
            {isLoginState ? "or, sign up" : "or, sign in"}
          </span>
        </form>
      </div>
    </div>
  );
}
