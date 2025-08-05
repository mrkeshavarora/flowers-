import React, { useEffect, useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [user, setuser] = useState({
        name: "",
        email: "",
        password: ""
    });
    useEffect(() => {
        console.log(user);
    }, [user.name])
    const navigate= useNavigate();
    function signup(e) {
        e.preventDefault();
        const check=JSON.parse(localStorage.getItem("users") || "[]");
        let exists = check.some( u => u.email === user.email);
        if (user.name.length < 3 || user.email.length < 3 || user.password.length < 3) {
            alert("invalid input");
            exists=false;   
        }
        if(exists){
            alert("already exists");
        }else{
            check.push(user);
            localStorage.setItem("users",JSON.stringify(check));
            alert("success");
            navigate("/signin");
        }

        
    }

    return (
        <>
            <div className="signup">
                <div className="signup_img">
                    <img src="./public/images/signupimage.png" alt="" />
                </div>
                <div className="signup_form">
                    <form onSubmit={signup}>
                        <h2>Create an account</h2>
                        <input type="text" onChange={(e) => user.name = e.target.value} placeholder='Name' />
                        <input type="email" onChange={(e) => user.email = e.target.value} placeholder='Email' />
                        <input type="password" onChange={(e) => user.password = e.target.value} placeholder='Password' />
                        <button type='submit' >Sign up</button>
                        <p>Already have an account? <a href="#">Login</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
