import React from 'react'

function PriceTable({ data }) {
    const color = ["primary", "secondary", "success", "danger", "warning", "info"]

    const randomColor = () => {
        const res = "table-" + color[Math.floor(Math.random() * color.length)]
        // console.log(res)
        return res
    }
    return (
        <table className="table table-bordered table-striped table-hover  " style={{ width: '650px' }}>
            <tbody>
                <tr className={randomColor()}>
                    <th>Product Brand:</th>
                    <td>{data.product_brand}</td>
                </tr>
                <tr className={randomColor()}>
                    <th>Product Name:</th>
                    <td>{data.product_name}</td>
                </tr>
                <tr className={randomColor()}>
                    <th>Product Model:</th>
                    <td>{data.product_model}</td>
                </tr>
                <tr className={randomColor()}>
                    <th>Product Category:</th>
                    <td>{data.product_category}</td>
                </tr>
                <tr className={randomColor()}>
                    <th>Product Sub Category:</th>
                    <td>{data.product_sub_category}</td>
                </tr>
                <tr className={randomColor()}>
                    <th>Product Ratings:</th>
                    <td>
                        {data.product_ratings}
                        {/* <span> <i className="fa-solid fa-star fa-beat" style={{ color: "#e8e34f" }}></i></span> */}
                        {
                            [...Array(Math.floor(data.product_ratings))].map((_, index) => (
                                <span key={index}> <i className="fa-solid fa-star fa-beat" style={{ color: "#f00" }}></i></span>
                            ))
                        }

                    </td>

                </tr>
                <tr className={randomColor()}>
                    <th>Available Colors:</th>
                    <td>{data.available_colors.join(", ")}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PriceTable