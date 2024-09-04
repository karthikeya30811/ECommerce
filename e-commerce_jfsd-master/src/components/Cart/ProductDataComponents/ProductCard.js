import React from 'react'
import { Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import ProductService from '../../../services/ProductService';
function ProductCard({item}) {
    const userData = JSON.parse(localStorage.getItem("userData"))
    const handleToCart = (e) => {
        e.preventDefault();
        if (item) {
            const data = {
                "pid": item.product_id,
                "name": item.product_title,
                "url": item.product_image,
                "price": item.product_lowest_price,
                "email": userData.email,
                "category": item.product_category
            };
            ProductService.saveUser(data);
            toast.success('🛒 Data Added to Cart!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    return (
        <div className="card m-2">
            <img src={item.product_image} alt={item.product_title} className='m-5' />
            <div className="card-body">
                <h3 className="text-center">{item.product_title}</h3>
                <p className="text-center">Category: {item.product_category}</p>
                <div className="star text-center">
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹{item.product_lowest_price}</h2>
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                        setModal(item);
                                    }}>
                                        Know More
                                    </button> */}
                <Link to={`/product/${item.product_id}`} className="btn btn-primary m-2">Know More</Link>
                <button className='btn' style={{backgroundColor : "#90EE90"}} onClick={handleToCart}><i class="fa-solid fa-cart-plus fa-lg" style={{color: "#f00"}}></i> Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard