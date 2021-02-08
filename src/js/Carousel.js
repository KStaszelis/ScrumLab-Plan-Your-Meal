import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        bool: true,
        autoplaySpeed: 2000
    }

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src="/images/img1.jpg" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="/images/img2.jpg" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="/images/img3.jpg" className="carousel-picture" alt="carousel"/>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
