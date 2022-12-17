import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/api">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/api/InsertStudent">
                <div className="nav-link">Add student</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
