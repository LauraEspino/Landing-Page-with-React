import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg pe-4 ps-4">
      <div className="container-fluid">
        <a className="navbar-brand font-weight-bolder" href="#">
          Start Boostrap
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarText">
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
