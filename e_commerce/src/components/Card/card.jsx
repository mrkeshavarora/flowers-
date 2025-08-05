import './card.css'
function Card({name,price,product_name,discounted_price,original_price,product_image}) {
    return(
        <>
            <div className="cardBody">
                <div className="card-product-image">
                    <img src={product_image} alt="" />
                </div>
                <span   className='product_name'>{product_name}</span>
                <span className='product_price'><span className='price_red'>{discounted_price}</span><span className="price_strike"> {original_price}</span></span>
            <div className="product_review">
                <img src="./images/product/stars.png" alt="" />

            </div>
            </div>
        </>
    )
}
export default Card