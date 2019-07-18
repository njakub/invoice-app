import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <nav className="Menu navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        TradeHub
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/courses">
              COURSES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
