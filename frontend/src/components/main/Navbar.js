import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="/Rcslogo.png"
                height={40}
                width={40}
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/Addcomponent">
                  AddComponent
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/main/ComponentsDetails">
                  ComponentDetails
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/List">
                  list
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/View">
                  view
                </NavLink>
              </li>
              </ul>
          </div>
          <div class="d-flex align-items-center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Logout
                </NavLink>
              </li>
              </ul>
          </div>
          </div>
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
