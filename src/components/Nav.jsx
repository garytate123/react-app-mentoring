import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
            <Link to='/' className="navbar-brand">Online Mentoring App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Features' className="nav-link">FEATURES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Signup' className="nav-link">SIGN UP</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Login' className="nav-link">LOGIN</Link>
                        </li>
                    </ul>
                </div>
           </div>
        </nav>
       
    )
}

export default Nav;