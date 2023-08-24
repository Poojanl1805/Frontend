import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <div className="logo navbar-brand text-light fw-bold fs-2">
          TAMILNADU TOURISM
        </div>
        <button
          className="navbar-toggler text-dark"
          type="button"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link smooth to="#home" className="nav-link text-light fw-bold">
                Home
              </Link>
              </li>
            <li className="nav-item">
              <Link smooth to="#" className="nav-link text-light fw-bold">
                Place To Visit
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#" className="nav-link text-light fw-bold">
                Best Time to Visit
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#" className="nav-link text-light fw-bold">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#" className="nav-link text-light fw-bold">
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#" className="nav-link text-light fw-bold">
                Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
