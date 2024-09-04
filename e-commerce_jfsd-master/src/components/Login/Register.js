import React, { useState } from 'react'
import './Register.css'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
function Register() {

    const [username, setUsername] = useState("");
    const [url, setUrl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phno, setPhno] = useState("");
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("male")
    const isAdmin =false
    const loginsuccess = false 
    const isActive = true
    const navigate = useNavigate()
    const handleRegistration = async (e) => {
        e.preventDefault()
        console.log("Registration")
        const data = { username, email, password, url, phno, location, gender, isAdmin,loginsuccess, isActive }
        console.log(data)
        await UserService.addUser(data);
        localStorage.setItem("userData", JSON.stringify(data))
        navigate("/home")
    }
    return (
        <div className='l-contain'>
            <div class="lcontainer">
                <div class="title">Registration</div>
                <div class="content">
                    <form onSubmit={handleRegistration}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Username</span>
                                <input type="text" placeholder="Enter your name" required onChange={(e) => {
                                    setUsername(e.target.value)
                                }} value={username} />
                            </div>
                            <div class="input-box">
                                <span class="details">Profile url</span>
                                <input type="text" placeholder="Enter your username" required
                                    onChange={(e) => {
                                        setUrl(e.target.value)
                                    }} value={url}
                                />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="Enter your email" required
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} value={email}
                                />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required
                                    onChange={(e) => {
                                        setPhno(e.target.value)
                                    }} value={phno}
                                />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="password" placeholder="Enter your password" required
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} value={password}
                                />
                            </div>
                            <div class="input-box">
                                <span class="details">Location</span>
                                <input type="text" placeholder="Confirm your password" required
                                    onChange={(e) => {
                                        setLocation(e.target.value)
                                    }} value={location}
                                />
                            </div>
                        </div>
                        <div class="gender-details">
                            <input type="radio" name="gender" id="dot-1" value="male" onClick={() => setGender("male")} />
                            <input type="radio" name="gender" id="dot-2" value="female" onClick={() => setGender("female")} />
                            <input type="radio" name="gender" id="dot-3" value="prefer not to say" onClick={() => setGender("prefer no to say")} />

                            <span class="gender-title">Gender</span>
                            <div class="category">
                                <label for="dot-1">
                                    <span class="dot one"></span>
                                    <span class="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span class="dot two"></span>
                                    <span class="gender">Female</span>
                                </label>
                                <label for="dot-3">
                                    <span class="dot three"></span>
                                    <span class="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register