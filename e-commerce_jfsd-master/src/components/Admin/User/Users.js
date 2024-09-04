import React, { useEffect, useState } from 'react'
import UserService from '../../../services/UserService'
import NavBar from '../../NavBar/NavBar'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
function Users() {

    const [data, setData] = useState([])
    const [toogle, setToogle] = useState(true)

    const deleteUser = (id) => {
        console.log(id)
        UserService.deleteUser(id).then((res) => console.log(res))
        toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    const handleActive = (id) => {
        UserService.UpdateActive(id);
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
    }

    useEffect(() => {
        UserService.getAllUsers()
            .then((res) => {
                setData(res.data);// Log data here
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [handleActive, deleteUser]);

    return (
        <div>
            <NavBar />
            <div className='container  ml-3'>
                <table className="table table-hover table-striped mt-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>User ID</th>
                            <th scope="col">User name</th>
                            <th scope="col">email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Location</th>
                            <th scope="col">Role</th>
                            <th scope="col" >Active/InActive</th>
                            <th scope="col">Delete User</th>
                        </tr>
                    </thead>
                    <tbody className="table-striped">
                        {
                            data.map((item, index) => (
                                <tr key={index} className='p-5'>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>
                                        <img src={item.url} alt="User Avatar" style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "0.7rem" }} />
                                        {item.username}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.phno}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.location}</td>
                                    <td>{
                                        // item.isAdmin ? "Admin" : "customer"
                                        item.isAdmin ? "Admin" : "User"
                                    }</td>
                                    <td>
                                        <div onClick={() => {
                                            handleActive(item.id);
                                            setToogle(!toogle); // Assuming it's setToggle, not setToogle
                                        }}>

                                            {
                                                item.active ?
                                                    <Link className='btn btn-success'><i class="fa-solid fa-bolt" style={{ color: "#fff" }}></i> Active</Link>
                                                    :
                                                    <Link className='btn btn-danger'><i class="fa-solid fa-user-alt-slash" style={{ color: "#fff" }}></i> InActive</Link>
                                            }
                                        </div>
                                    </td>
                                    <td ><Link className='btn btn-danger' onClick={() => { deleteUser(item.id) }}><i class="fa-solid fa-trash" style={{ color: "#fff" }} ></i></Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
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
    )
}

export default Users