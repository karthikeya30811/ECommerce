import React, { useState } from 'react';
import './Contact.css';
import NavBar from '../NavBar/NavBar';
import ContactService from '../../services/ContactService';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
  const data = JSON.parse(localStorage.getItem("userData"));
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const username = data.username;
  const email = data.email;
  const url = data.url
  const handleAddContact = () => {
    const dt = { username, email, subject, message, url };
    // console.log(dt)
    ContactService.addContact(dt)
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
    console.log("success")
    setMessage("")
    setSubject("")
  };

  return (
    <div>
      <NavBar />
      <div className="container contact">
        <div className="row">
          <div className="col-md-3 exm">
            <div className="contact-info">
              <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
              <h2>Contact Us</h2>
              <h4>We would love to hear from you!</h4>
            </div>
          </div>
          <div className="col-md-9 exm2">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="fname">
                  User Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Enter User Name"
                    name="fname"
                    value={data.username}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Enter Email"
                    name="lname"
                    value={data.email}
                    readOnly
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Subject:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter subject"
                    name="email"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    value={subject}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="comment">
                  Comment:
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default" onClick={handleAddContact}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Contact;
