import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      //   style={{ paddingLeft: 100, paddingRight: 100 }}
      className="navbar navbar-expand-lg navbar-light bg-transparent main-nav"
    >
      <Link to="/home">
        <img className="navbar-brand logo" src={logo} alt="creative-agency" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link mr-5" to="/#portfolio">
              Our Portfolio
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link mr-5" to="/#reviews">
              Reviews
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link mr-5" to="/#footer">
              Contact Us
            </HashLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/login">
              <button className="btn btn-brand text-white">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
