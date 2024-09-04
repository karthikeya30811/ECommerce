import React, { useState } from 'react'
import NotificationService from '../../../services/NotificationService'
import { toast, ToastContainer } from 'react-toastify';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom';

function AddNotification() {
    const userData = JSON.parse(localStorage.getItem("userData"))
    const email = userData.email
    const username = userData.username
    const url = userData.url
    const [message, setMessage] = useState("")
    const [toogle, setToogle] = useState(true)

    const handleNotification = (e) => {

        const dt = { url, email, message, username }
        NotificationService.addNotification(dt).then(
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        )
        // window.location.reload()
    }

    return (
        <div>
            <NavBar />
            <div class="center">
                <div class="rcontainer">
                    <div class="text">
                        Add FeedBack
                    </div>
                    <form onSubmit={(e) => {
                        // e.preventDefault();
                        handleNotification();
                        setToogle(!toogle);
                    }}
                    >
                        <div class="data">
                            <label>Email</label>
                            <input type="text" required value={email} />
                        </div>
                        <div class="data">
                            <label>Password</label>
                            <input type="text" required
                                value={username}
                            />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea
                                rows="5"
                                id="comment"
                                style={{ width: "350px" }}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div class="btn">
                            <div class="inner"></div>
                            <button type="submit" >Add Notification</button>
                        </div>
                    </form>
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
        </div>
    )
}

export default AddNotification;