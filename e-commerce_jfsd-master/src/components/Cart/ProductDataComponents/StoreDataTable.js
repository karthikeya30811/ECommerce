import React from 'react'
import { Link } from 'react-router-dom'
function StoreDataTable({storeData}) {
    return (
        <div>
            <div className="store-link">
                <Link
                    to={storeData.product_store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={storeData.product_store_logo}
                        alt={`${storeData.product_store} Logo`}
                        className="store-logo"
                    />
                </Link>
            </div>
            <table className="comparison-table table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td>{storeData.product_price}</td>
                    </tr>
                    <tr>
                        <td>Offer</td>
                        <td>{storeData.product_offer === "" ? 0 : storeData.product_offer}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>{storeData.product_color}</td>
                    </tr>
                    <tr>
                        <td>Delivery Cost</td>
                        <td>{storeData.product_delivery_cost}</td>
                    </tr>
                    <tr>
                        <td>Return Time</td>
                        <td>{storeData.return_time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StoreDataTable