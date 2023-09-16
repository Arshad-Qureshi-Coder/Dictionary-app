import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contect'>Contect</Link>
        </nav>
    )
}