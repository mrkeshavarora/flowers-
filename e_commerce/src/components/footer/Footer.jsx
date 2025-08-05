import React from 'react'
import './footer.css'
// import {a} from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <ul className='footer_ul'>
                    <li>
                        <ul>
                            <li><h3>Exclusive</h3></li>
                            <li>Subscribe</li>
                            <li>Get 10% off your first order</li>
                            <li><input type="text" placeholder="Enter your email" className='footer_email_input'/></li>
                        </ul>
                    </li>
                    <li>
                        
                        <ul>
                            <li><h3>Support</h3></li>
                            <li>Tilak nagar, Delhi, India</li>
                            <li>Exclusive@gmail.com</li>
                            <li>+91 987389749</li>

                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><h3>My Account</h3></li>
                            <li><a>Login</a></li>
                            <li><a>Register</a></li>
                            <li><a>Wishlist</a></li>
                            <li><a>SHop</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><h3>Quick link</h3></li>
                            <li><a>Privacy policy</a></li>
                            <li><a>Term of use</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h3>Download App</h3>
                            <li><p>Save 3$ with App New User Only</p></li>
                            <li><img src="" alt="" /></li>
                            <li>Login </li>
                        </ul>
                    </li>
                    
                </ul>
                {/* <hr className='footer_hr' /> */}
            </div>
        </>
    )
}

export default Footer
