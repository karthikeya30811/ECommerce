import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import './NavBar.css'; // Make sure to import your CSS file
import NotificationService from '../../services/NotificationService';

export default function NavBar() {
    const data = JSON.parse(localStorage.getItem("userData"));
    const [initialNotifications, setInitialNotifications ] = useState([])
    // [
    //     {
    //         id: 1,
    //         imageSrc: 'https://i.imgur.com/uIgDDDd.jpg',
    //         name: 'Samso aliao',
    //         message: 'Samso Nagaro Like your homework',
    //     },
    //     {
    //         id: 2,
    //         imageSrc: 'https://img.icons8.com/flat_round/64/000000/vote-badge.png',
    //         name: 'John Silvester',
    //         message: '+20 vista badge earned',
    //     },
    //     {
    //         id: 3,
    //         imageSrc: 'https://img.icons8.com/flat_round/64/000000/vote-badge.png',
    //         name: 'John Silvester',
    //         message: '+20 vista badge earned',
    //     },
    //     {
    //         id: 4,
    //         imageSrc: 'https://img.icons8.com/flat_round/64/000000/vote-badge.png',
    //         name: 'John Silvester',
    //         message: '+20 vista badge earned',
    //     },
    //     // Add more notification objects here if needed
    // ]
    const [down, setDown] = useState(false);
    const toggleBox = () => {
        setDown((prevState) => !prevState);
    };
    useEffect(() => {
        NotificationService.allNotifications()
            .then((res) => {
                setInitialNotifications(res.data);
                console.log(data) // Assuming notifications are in res.data
            })
            .catch((error) => {
                console.error('Error fetching notifications:', error);
            });
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                {/* <Link to="/home" className="navbar-brand Nav-Brand-title">E-Commerce</Link> */}
                <Link to="/home" className="navbar-brand Nav-Brand-title">Price Pulse</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" exact className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link">Pricing</Link>
                        </li>
                        {
                            data.isAdmin === true ?
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link to="/contacts" className="dropdown-item">Contacts</Link></li>
                                <li><Link to="/users" className="dropdown-item">Users</Link></li>
                                <li><Link to="/addnotification" className="dropdown-item">Add Notification</Link></li>
                            </ul>
                        </li> : null
                        }
                    </ul>
                </div>
                {/* Adding right */}
                <div className="d-flex align-items-center justify-content-end">
                    <Link to="/watchlist" className="text-reset">
                        <i className="fas fa-shopping-cart" style={{ fontSize: "150%" }}></i>
                    </Link>

                    <div className="nav-item">
                        {/* <Link
                            className="text-reset me-3 dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        > */}
                        <div className="icon" id="bell" onClick={toggleBox}>
                        <i class="fa-solid fa-bell fa-shake fa-lg p-3" style={{color: "#000"}}></i>
                        <span className="badge rounded-pill bg-danger">{initialNotifications.length}</span>
                        </div>
                        <div className="notifications" id="box" style={{ height: down ? 'auto' : '0px', opacity: down ? 1 : 0 }}>
                            <div>
                            <h2 className='noti-heading'>Notifications - <span>{initialNotifications.length}</span></h2>
                            {initialNotifications.map((notification) => (
                                <div className="notifications-item" key={notification.id}>
                                    <img src={notification.url} alt="img" />
                                    <div className="text">
                                        <h4>{notification.username}</h4>
                                        <p>{notification.message}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        {/* </Link> */}
                        {/* <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <Link className="dropdown-item" to="#">Some news</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">Another news</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </li>
                        </ul> */}
                    </div>
                    <div className="dropdown">
                        <Link
                            className="dropdown-toggle d-flex align-items-center"
                            to="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >

                            <img
                                src={data.url}
                                className=" img-xl rounded-circle"

                                height="40"
                                alt="profile"
                                loading="lazy"
                            />

                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <Link className="dropdown-item" to="/user">My profile</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">Settings</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
