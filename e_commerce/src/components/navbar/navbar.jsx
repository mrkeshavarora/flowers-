import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="top-message">
                <h4>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  &nbsp; &nbsp; 
                </h4>
                <a href="">Shop Now</a>
            </div>
            <nav>
                <Link to={"/"}>
                    <div className="logo">
                        <img src="/images/Logo.png" alt="" />
                    </div>
                </Link>
                <div className={`nav_responsive ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>

                        <li><a href="">Contact</a></li> 
                        <li><Link to={"/about"}>About</Link></li> 
                        <li><Link to={"/signup"}>Signup</Link></li>
                        <li><Link to={"/signin"}>Signin</Link></li>
                        {/* <li><Link to={"/signup"}>Sign up</Link></li>
                        <li><Link to={"/signin"}>Sign in</Link></li> */}
                    </ul>
                </div>
                <div className="right-navbar">
                    <input type="text" placeholder='what are you looking for' />
                    <div className="heart-icon">
                    </div>
                    <div className="shopping-cart">
                    </div>
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </>
    )
}

export default Navbar
