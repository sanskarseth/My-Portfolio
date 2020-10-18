import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to="/home">
                    Logo
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about_me">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/my_works">My Works</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;