import React from 'react'
import './Profile.css'
import NavBar from '../NavBar/NavBar'
function Profile() {
    const data = JSON.parse(localStorage.getItem("userData"))
  return (
   <div>
    <NavBar/>
     <div class="pcontainer">
        <div class="box">
            {console.log(data)}
            <img src={data.url} alt=""/>
            <ul>
                <li>{data.username}</li>
                <li>20 years</li>
                <li>Student</li>
                <li>
                    <i style={{fontSize:"24px" }}class="fa"></i>
                    <i style={{fontSize:"24px" }} class="fa"></i>
                    <i style={{fontSize:"24px" }} class="fa"></i>
                </li>
            </ul>
        </div>
        <div class="About">
            <ul>
                <h1>about</h1>
            </ul>
            <ul>
                <h3>Work</h3>
                <li>Student</li>
            </ul>
            <ul>
                <h3>Gender</h3>
                <li>{data.gender}</li>
            </ul>
            <ul>
                <h3>location</h3>
                <li>{data.location}</li>
            </ul>
            <ul>
                <h3>Email : </h3>
                <p>{data.email}</p>
            </ul>
            <ul>
                <h3>Contact</h3>
                <li>{data.phno}</li>
            </ul>
        </div>
    </div>
   </div>
  )
}

export default Profile