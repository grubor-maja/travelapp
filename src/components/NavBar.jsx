import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return ( <>
    <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item"><a href="" className="nav-link">Pocetna</a></li>
            <li className="nav-item"><a href="" className="nav-link">Pesacke ture</a></li>
            <li className="nav-item"><a href="" className="nav-link">O nama</a></li>
            <li className="nav-item"><a href="" className="nav-link">Kontakt</a></li>
        </ul>
    </nav>
    </> );
}

export default NavBar;