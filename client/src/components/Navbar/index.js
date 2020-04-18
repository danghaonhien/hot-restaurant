import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Todos <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/counter">Counter</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/comments">Comments</Link>
        </li>
        </ul>
    </div>
    </nav>
);
export default Navbar;