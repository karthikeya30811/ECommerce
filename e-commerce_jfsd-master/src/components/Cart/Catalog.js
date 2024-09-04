import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from './ProductDataComponents/ProductCard';

export default function Catalog() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('phone');
    const [dummy, setDummy] = useState('');
    // const [modal, setModal] = useState(null);
    // "https://price-api.datayuge.com/api/v1/compare/search?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&product=${productName}&price_start=${priceStart}&price_end=${priceEnd}&page=1"
    useEffect(() => {
        setLoading(true);
    
        fetch(
            `https://price-api.datayuge.com/api/v1/compare/search?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&product=${search}&sort=popularity&page=1`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [search]);
    
    return (
        <div>
            <NavBar />
            <div className='text-align-center mb-5' style={{
                textAlign: "center",
                fontSize: "72px",
                textTransform: "uppercase",
                mixBlendMode: "overlay",
                marginTop: "3%"
            }}>
                <h1 className='text-align-center'>Store</h1>
            </div>
            <div className='d-flex justify-content-center input-group mb-3'>
                <input
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearch(dummy);
                        }
                    }}
                    className='form-control'
                    type="text"
                    value={dummy}
                    name="search"
                    onChange={(e) => {
                        setDummy(e.target.value);
                    }} style={{ maxWidth: "500px" }} />
                <button className="btn  btn btn-primary m-2" onClick={() => setSearch(dummy)}>
                    Search
                </button>
            </div>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                data.length === 0 ? <h2>Loading...</h2> :
                    data.data.length === 0 ? <div style={{ height: "100vh", marginTop: "20vh" }}>
                        <div className='container d-flex justify-content-center align-items-center' style={{ height: "250px", width: "350px", backgroundColor: "#fff" }}>
                            {/* <h1><i class="fa-solid fa-cart-shopping fa-bounce fa-2xl" style={{color: "#cf0743", fontWeight : "600%"}}></i></h1> */}
                            <div className='container'>
                                <div className='ml-5' style={{ marginLeft: "100px", marginBottom: "70px", marginTop: "20px" }}><h1><i class="fa-solid fa-face-sad-tear fa-bounce fa-2xl" style={{ color: "#cf0743", fontWeight: "600%" }}></i></h1>
                                </div>
                                <div className='' style={{ marginLeft: "40px" }}><p>Item You are looking Not found</p></div>
                            </div>
                        </div>
                    </div>
                        :
                        <div className="container-cards m-5 ml-5 mr-5" id="product-cards" style={{ display: "flex", flexWrap: "wrap" }}>
                            {data.data.map((item, index) => (
                                <div key={index} className="col-md-3 py-3 py-md-0">
                                    <ProductCard item={item} />
                                </div>
                            ))}
                        </div>
            )}
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
