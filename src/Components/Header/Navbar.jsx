import React from "react";

function Navbar() {
    return(
    <div className="collapse navbar-collapse px-3" id="navbarText">
        <ul className="nav nav-underline me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Shop</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
            </li>
        </ul>
    </div>
    )
}
export default Navbar