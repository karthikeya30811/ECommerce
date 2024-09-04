import React, { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';
import NavBar from '../NavBar/NavBar';

export default function WatchList() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [data, setData] = useState(null);
  const [modal, setModal] = useState({
    id: 52,
    pid: 'ZToxNjk5OQ',
    name: 'Apple iPhone 13',
    url: 'https://images-api.datayuge.in/image/dHI6dy0zNzAsaC0zMzAsYy1hdF9tYXgvMTY5OTktMjM2LTE.jpg',
    price: 49499,
    email: 'user@gmail.com',
    category: 'mobile'
  });
  const handleDeleteProduct = (id) => {
    ProductService.deleteProduct(id);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductService.getData(userData.email);
        setData(result.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [handleDeleteProduct]);

  

  return (
    <div>
      <NavBar />
      <div className='container'>
      <div className='text-align-center mb-5' style={{ 
                textAlign: "center",
                 fontSize : "72px",
                 textTransform : "uppercase",
                 mixBlendMode : "overlay",
                 marginTop : "3%"
                 }}>
                <h1 className='text-align-center'>WatchList</h1>
            </div>
        <div className='d-flex flex-wrap justify-content-center'>
                 {console.log(data)}
          {data ? data.length!==0 ?(
            data.map((item, index) => (
              <div key={index} className="card m-2" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.url} className="img-fluid rounded-start m-3" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Category : {item.category}</p>
                      <h3 className="card-text"><small className="text-muted">&#x20b9; {item.price}</small></h3>
                      <div>
                        <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                          setModal(item);
                        }}>Know More</button>
                        <button className='btn btn-danger' onClick={() => handleDeleteProduct(item.id)}>Delete Product</button>
                        {/* Pass the 'id' to handleDeleteProduct */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ):<div style={{ height: "80vh", marginTop: "20vh" }}>
          <div className='container d-flex justify-content-center align-items-center' style={{ height: "150px", width: "350px" }}>
              {/* <h1><i class="fa-solid fa-cart-shopping fa-bounce fa-2xl" style={{color: "#cf0743", fontWeight : "600%"}}></i></h1> */}
              <div className='card'>
                  <div className='ml-5' style={{ marginLeft: "100px", marginBottom: "70px", marginTop: "20px" }}><h1><i class="fa-solid fa-face-sad-tear fa-bounce fa-2xl" style={{ color: "#cf0743", fontWeight: "600%" }}></i></h1>
                  </div>
                  <div className='' style={{ marginLeft: "40px" }}><p>No Data Found Please Add to See Here</p></div>
                  </div>
          </div>
      </div> : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>

      {/* Modal moved outside the mapping loop */}
      {modal && (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{modal.name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={modal.url} alt="Product" />
                </div>
                <table className="table table-bordered table-striped table-hover">
                  <thead className='bg-info text-white'>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Price (&#x20b9;)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={modal.id}>
                      <td>{modal.pid}</td>
                      <td>{modal.name}</td>
                      <td>{modal.category}</td>
                      <td>{modal.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href={`/product/${modal.pid}`} className="btn btn-primary">Know More</a>
                <button onClick={() => handleDeleteProduct(modal.id)} className="btn btn-primary">Delete Product</button>
                {/* Pass the 'id' to handleDeleteProduct */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
