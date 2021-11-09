import React from "react";

// assets
import gamesLogo from "../../assets/games-logo.png";

// css
import "./AuthenticateSidebar.css";

export default function AuthenticateSidebar() {
  return (
    <div className="authenticate-sidebar">
      <div className="authenticate-sidebar__heading">
        <h1 className="authenticate-sidebar__title">Natus Vincere —</h1>
        <p className="authenticate-sidebar__para">Online team management</p>
      </div>
      <div className="authenticate-sidebar__img-container">
        <img className="authenticate-sidebar__img" src={gamesLogo} />
      </div>
      <div className="authenticate-sidebar__cta">
        <span className="authenticate-sidebar__cta-text">
          Don't have an account ?
        </span>
        <a className="authenticate-sidebar__cta-link" href="/">
          Click here
        </a>
      </div>
    </div>
  );
}
