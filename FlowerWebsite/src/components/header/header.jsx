import React from 'react'
import { } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header className="head">
                <div className="headContactDetails">
                    <p> &#x1F4DE; +91 9988772212</p>
                    <p>📧flower@gmail.com</p>
                    <p>Roop Nagar, Block 2, New Delhi 110007</p>
                </div>
                <div className="couponstrip">
                    <p>Apply coupon code WELCOME25 to avail your 25% discount</p>
                    <p>Apply coupon code BUY1GET1 to avail your free extra item</p>
                    <p>Apply coupon code KITKAT02 to avail your free kitkat gift with your initial purchase</p>
                </div>
                <div className="navbar">
                    <div className="logo">
                    </div>
                    <ul>
                        <li><>FLowers</></li>
                        <li><>Cakes</></li>
                        <li><>Balloons</></li>
                        <li><>Chocolate</></li>
                        <li><>FLowers</></li>
                        <li><>FLowers</></li>
                        <li><>FLowers</></li>

                    </ul>
                    <div className="nav-input">
                    </div>
                    <input type="text" />
                    <div className="nav-cart">
                        <button>Cart</button>
                    </div>
                    <div className="nav-login">
                        <button>Login</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
