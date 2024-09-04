import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './ProductData.css'; // Ensure that you have the correct CSS file imported.
import PriceTable from './ProductDataComponents/PriceTable';
import StoreDataTable from './ProductDataComponents/StoreDataTable';

function ProductData() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const myCarousel = useRef(null);
    const carouselThumbs = useRef(null);

    // const color = [ "primary", "secondary", "success", "danger", "warning", "info" ]
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://price-api.datayuge.com/api/v1/compare/detail?id=${id}&api_key=4N9jvDnwnxSEN4lqkBHiVQ8SZXS3KWSUJnz`);
                setData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (myCarousel.current && carouselThumbs.current) {
            const handleSlide = (e) => {
                const index = parseInt(e.relatedTarget.getAttribute('data-bs-slide-to'), 10);
                setActiveIndex(index);
            };

            myCarousel.current.addEventListener('slid.bs.carousel', handleSlide);

            return () => {
                myCarousel.current.removeEventListener('slid.bs.carousel', handleSlide);
            };
        }
    }, []);

    const handleThumbsClick = (index) => () => {
        setActiveIndex(index);
    };
    return (
        <div>
            <NavBar />
            {data ? (
                <div className='container d-flex'>
                    <div className="container m-5" style={{ maxWidth: '800px', margin: "100rem" }}>
                        <div className="carousel-container position-relative row p-5" style={{ background: "#fff", borderRadius: "0.7em"}}>
                            <div className=''>
                                <div
                                    id="myCarousel"
                                    className="carousel slide m-3"
                                    data-bs-ride="carousel"
                                    ref={myCarousel}
                                >
                                    <div className="carousel-inner">
                                        {data.product_images.map((image, index) => (
                                            <div
                                                className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                                                key={index}
                                            >
                                                <img style={{marginBottom: "40px"}} src={image} className="d-block w-100" alt={`Carousel Item ${index + 1}`}  />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    id="carousel-thumbs"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                    ref={carouselThumbs}
                                >
                                    <div className="carousel-inner">
                                        {data.product_images.map((image, index) => (
                                            <button
                                                className={`thumb col-3 col-sm-2 px-1 py-2 ${activeIndex === index ? 'selected' : ''}`}
                                                key={index}
                                                onMouseOver={handleThumbsClick(index)}
                                                onClick={handleThumbsClick(index)}

                                            >
                                                <img src={image} className="img-fluid" alt={`Thumbnail ${index + 1}`} />
                                            </button>
                                        ))}
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carousel-thumbs"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carousel-thumbs"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className='mt-4 text-light'>&#x20b9; {data.product_mrp}</h1>
                                <div className="p-3" style={{ backgroundColor: "#fff", width: '680px', borderRadius: "0.7em" }}>
                                   <PriceTable data = {data}/>
                                </div>
                            </div>
                        </div>
                        <h3 className=''>Store Comparisons:</h3>
                        <div className='d-flex'>
                            {data.stores.map((store, index) => {
                                const storeName = Object.keys(store)[0];
                                const storeData = store[storeName];
                                if (storeData.product_store) {
                                    return (
                                        <div key={index} className='m-3'>
                                            <StoreDataTable storeData={storeData}/>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                        </div>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default ProductData;