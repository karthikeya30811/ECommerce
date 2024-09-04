import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const handleLogin = (e) => {
    e.preventDefault();
    const dt = { email, password };
    console.log(dt);
    
    UserService.getLoginEmail(email, dt)
        .then((response) => {
            setData(response.data);
            console.log(data);

            if (data !== null) {
                if (data.loginsuccess === false) {
                    console.log("Not Found");
                    toast.error('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    console.log(data);
                    console.log("Not Found");
                } else {
                    toast.success('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    localStorage.setItem('userData', JSON.stringify(data));
                    navigate("/home");
                    console.log('Found');
                }
            } if(data === null) {
                toast.error('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                console.log('Not Null');
            }
        })
        .catch((error) => {
            console.error(error);
            // Handle the error appropriately on the frontend.
        });
};


    return (
        <div class="center">
            <div class="rcontainer">
                <div class="text">
                    Login Form
                </div>
                <form onSubmit={handleLogin}>
                    <div class="data">
                        <label>Email</label>
                        <input type="text" required onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <div class="data">
                        <label>Password</label>
                        <input type="password" required
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div class="forgot-pass">
                        <Link to="#">Forgot Password?</Link>
                    </div>
                    <div class="btn">
                        <div class="inner"></div>
                        <button type="submit">login</button>
                    </div>
                    <div class="signup-link">
                        Not Link member? <Link to="/register">Signup now</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login