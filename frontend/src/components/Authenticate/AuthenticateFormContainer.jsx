import React from "react";

import steamLogo from "../../assets/steam-logo.svg";
import vkLogo from "../../assets/vk-social-network-logo.svg";
import "./AuthenticateFormContainer.css";

export default function AuthenticateFormContainer() {
  return (
    <div className="authenticate-form-container">
      <div className="authenticate-form-container__wrapper">
        <div className="authenticate-form-container__heading">
          <div className="authenticate-form-container__heading-title">
            Sign In
          </div>
          <div className="authenticate-form-container__heading-msg">
            Welcome, we missed you!
          </div>
        </div>
        <div className="authenticate-form-container__form">
          <div className="input-container">
            <label className="input-container__label">Your Email</label>
            <input
              className="input-container__input"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-container">
            <label className="input-container__label">Password</label>
            <input
              className="input-container__input"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="authenticate-form-container__form-cta">
            <div className="authenticate-form-container__form-cta__remember-me">
              <span class="checkmark"></span>
              Remember me
            </div>
            <div className="authenticate-form-container__form-cta__forgot-password">
              Forgot Password ?
            </div>
          </div>
          <button className="authenticate-form-container__form__submit-btn">
            Sign In
          </button>
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
        </div>
      </div>
    </div>
  );
}
