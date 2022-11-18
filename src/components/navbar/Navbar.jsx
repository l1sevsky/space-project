import Button from 'components/UI/button/Button';
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <button className="NavButton">
                <Link to={"/apod"}>Daily Pictures</Link>
            </button>
            <button className="NavButton">
                <Link to={"/asteroids"}>Asteroids</Link>
            </button>
        </nav>
    );
}

export default Navbar;