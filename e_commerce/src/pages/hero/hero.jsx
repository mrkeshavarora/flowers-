import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./hero.css";

import { Pagination, Navigation } from "swiper/modules";
import Card from "../../components/Card/card";
import { Link } from "react-router-dom";

const Hero = (product_name, product_image, discounted_price, original_price) => {
    const [allproduct, setallproduct] = useState([]);
    const [bestselling, setbestselling] = useState([]);
    const [flashsales, setflashsales] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/carts")
            .then((res) => res.json())
            .then((data) => {
                setallproduct(data.carts)
                console.log(allproduct)
            })
    }, [])
    useEffect(() => {
        if (allproduct.length > 1) {
            setflashsales(allproduct[4])
            setbestselling(allproduct[0])

        }
    }, [allproduct]);
    return (
        <>
            <div className="hero_section">

                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src="./images/slideimage1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>

                </Swiper>
                <section className="today_section">
                    <div className="today_head">
                        <h5> Today's</h5>
                    </div>
                    <div className="flash_sales">
                        <h3>Flash Sales</h3>
                    </div>

                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        // centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="fresh_sales_swiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 300,
                            },
                        }}
                    >
                        {flashsales?.products?.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Link
                                    to={`/productPage/${product.id}`}
                                    state={{ parentId: flashsales.id }}
                                >
                                <Card product_name={product.title} product_image={product.thumbnail} discounted_price={product.price} original_price={product.price} />
                            </Link>

                                </SwiperSlide>
                            ))}
                   {flashsales?.products?.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Link
                                    to={`/productPage/${product.id}`}
                                    state={{ parentId: flashsales.id }}
                                >
                                <Card product_name={product.title} product_image={product.thumbnail} discounted_price={product.price} original_price={product.price} />
                            </Link>

                                </SwiperSlide>
                            ))}
                </Swiper>
            </section>
            <section className="best_selling">
                <div className="best_selling_head">
                    <h5>Best Selling Products</h5>
                    <div className="best_selling_btn">
                        <button>View All</button>
                    </div>
                </div>
                <div className="best_selling_products">
                    {bestselling?.products?.map((product) => (
                        <div key={product.id}>
                            <Link
                                to={`/productPage/${product.id}`}
                                state={{ parentId: bestselling.id }}
                            >
                                <Card product_name={product.title} product_image={product.thumbnail} discounted_price={product.price} original_price={product.price} />
                            </Link>
                        </div>
                    ))}
                </div>

            </section>
        </div >
        </>
    );
};

export default Hero;
