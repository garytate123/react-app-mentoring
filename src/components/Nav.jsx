import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return <div>
        <nav>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/Signup'>
                <li>Signup</li>
            </Link>
            <Link to='/Login'>
                <li>Login</li>
            </Link>
        </nav>
    </div>

}

export default Nav;