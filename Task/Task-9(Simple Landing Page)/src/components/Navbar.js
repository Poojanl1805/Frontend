import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-sm navbar-dark bg-dark py-2 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#home" className="navbar-brand">
          Pooja's Store <i className="fa-brands fa-pied-piper-pp fa-beat" style={{ fontSize: '24px', marginLeft: '10px' }}></i>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#career" className="nav-link">Career</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
