import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Search from "./search";

function Header() {
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><Logo /></a>
                    <Navbar />
                    <Search />
                    <Cart />
                </div>
            </nav>
        </div>
    )
}

export default Header