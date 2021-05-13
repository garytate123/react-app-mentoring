import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">Online Mentoring App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to='/Features' className="nav-link">FEATURES</Link>
            </li>
            <li className="nav-item">
              <Link to='/Signup' className="nav-link">SIGNUP</Link>
            </li>
            <li className="nav-item">
              <Link to='/Login' className="nav-link">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav;