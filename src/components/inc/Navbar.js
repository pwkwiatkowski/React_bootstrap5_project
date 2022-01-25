import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        // Bootstrap navbar

        <nav className="navbar navbar-expand-lg navbar-light bg-warning" >
  <div className="container-fluid">
  <a className="navbar-brand" href="#" >
    Awesome™ Company
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/" className="nav-link">Strona główna</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">O nas</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="nav-link">Kontakt</Link>
        </li>
        <li className="nav-item">
        <Link to="/pricelist" className="nav-link">Cennik</Link>
        </li>
        <li className="nav-item">
        <Link to="/opinions" className="nav-link">Opinie</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;