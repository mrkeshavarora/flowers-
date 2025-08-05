import React, { useEffect } from 'react'
import { useLocation, useParams ,Link} from 'react-router-dom'
// import '../hero/hero'

import './productPage.css'
import { useState } from 'react'
import Card from '../../components/Card/card'
const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  const [allproducts,setallproducts] = useState([]);
  const[products,setproducts]=useState([]);
  useEffect(()=>{
    // console.log(data);
    fetch("https://dummyjson.com/carts")
    .then((res)=>res.json())
    .then((data)=>{
      setallproducts(data.carts);    
    })
  },[location.state])

    useEffect(() => {
      if(allproducts.length>1){
        
        allproducts[data.parentId-1].products.map((product)=>{
          // console.log(product.id);
          if(product.id === Number(id)){
            setproducts(product)
        }
      })  
    }
    }, [allproducts])
    
  


  return (
    <>
      <div className="product_page">
        <div className="product_page_image">
          <img src={products.thumbnail} alt="" />
        </div>
        <div className="product_page_detail">
          <h2>{products.title}</h2>
          <p>Price: {products.price}</p>
          <p>Description: {products.description}</p>
          <p>Brand: {products.brand}</p>
          <p>Stocks left: {products.quantity}</p>
          <div className="product_page_btn">
            <button>Buy Now</button> 
            <button>Add to cart</button>
            
            
          </div>
        </div>
      </div>
      <div className="related_products">
        <h2>Related Products</h2>
      {/* <section className="best_selling">
      <div className="best_selling_products">
      {allproducts[1]?.products?.map((product) => (
                            <div key={product.id}>
                                {/* <Link
                                    to={`/productPage/${product.id}`}
                                    state={{ parentId: bestselling.id }}
                                > */}
                                    {/* <Card product_name={product.title} product_image={product.thumbnail} discounted_price={product.price} original_price={product.price} />
                                </Link>
                            </div>
                        ))}
      </div>
      </section>  */}
      </div>
    </>
  )
}

export default ProductPage
