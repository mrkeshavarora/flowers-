import React from 'react'
import './signin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const [user, setuser] = useState({
        email: '',
        password: ''
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const check = JSON.parse(localStorage.getItem('users'));
        if (user.length < 1) {
            alert('invalid user')
        } else {
            localStorage.setItem('loggedIn', true);
            setIsLoggedIn(true); // <-- update state immediately
            const exists = check.some(u => u.email === user.email && u.password === user.password)
            if (exists) {
                navigate('/')
            } else {
                alert('invalid user')
            }
        }
    }

    return (
        <>
            <div className="signin">
                <div className="signin_img">
                    <img src="./public/images/signupimage.png" alt="" />
                </div>
                <div className="signin_form">
                    <form onSubmit={handleSubmit}>
                        <h2>Sign in</h2>
                        <input type="email" onChange={(e => setuser({ ...user, email: e.target.value }))} placeholder='Email' />
                        <input type="password" onChange={(e => setuser({ ...user, password: e.target.value }))} placeholder='Password' />
                        <button type='submit'>Sign in</button>
                        <p>Don't have an account? <a href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin
