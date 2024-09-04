import React, { useEffect, useState } from 'react';
import ContactService from '../../../services/ContactService';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function ShowAllContacts() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({
    id: 302,
    username: 'Mahesh',
    email: 'user@gmail.com',
    url: 'https://bigstarbio.com/wp-content/uploads/2020/06/Mahesh-Babu.jpg',
    subject: 'This is a sample message.',
    message:
      '🎉 Shop till you drop! Explore our latest collection and enjoy exclusive discounts. Don\'t miss out on the hottest deals of the season. 🛍️ Shop now and treat yourself to something special. Happy shopping!'
  })
  const [toogle, setToogle] = useState(true)
  const DeleteContact = (id) => {
    ContactService.deleteById(id).then((res) => {
      console.log(res)
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
    })
  }
  useEffect(() => {
    ContactService.getAllContact()
      .then((res) => {
        if (Array.isArray(res.data)) {
          setData(res.data);
          console.log(data)
        } else {
          console.error('API response is not an array:', res);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [toogle]);

  

  return (
    <div>
      <NavBar />
      <div className="container">
        <table className="table table-hover table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">User name</th>
              <th scope="col">email</th>
              <th scope="col">Subject</th>
              <th scope="col">View / Delete</th>
            </tr>
          </thead>
          <tbody className="table-striped" style={{ backgroundColor: "#fff" }}>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.id}</td>
                <td>
                  <img src={item.url} alt="User Avatar" style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "0.7rem" }} />
                  {item.username}
                </td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td className='content-space-between'>
                  <Link
                    className='btn btn-secondary'
                    style={{ marginRight: "0.5rem" }}
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setModal(item)}
                  >
                    <i class="fa-solid fa-eye" style={{ color: "#fff" }}></i>
                  </Link>
                  <Link className='btn btn-danger' onClick={() =>{DeleteContact(item.id);setToogle(!toogle)}}><i class="fa-solid fa-trash" style={{ color: "#fff" }}></i></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className='d-flex justify-content-evenly'>
                <div>
                  <div>
                    <img src={modal.url} alt='profile' style={{ width: "150px", height: "150px", marginRight: "0.7rem", marginBottom: "0.7em" }} />
                  </div>
                  <div>
                    <h4>{modal.username}</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{modal.subject}</h3>
                  </div>
                  <div>
                    <p>{modal.message}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
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

export default ShowAllContacts;
