import "../css/Home.css";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null);

    const banners = [
        { img: "/assets/images/home/banner01.webp", link: '/BigBang' },
        { img: "/assets/images/home/banner02.webp", link: '/EoE' },
        { img: "/assets/images/home/banner03.webp", link: '/Planets' },
        { img: "/assets/images/home/banner04.webp", link: '/Constellation' },
        { img: "/assets/images/home/banner05.webp", link: '/Comets' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="home_banner">Loading...</div>
            ) : (
                <div className="home_banner">
                    <Slider ref={sliderRef} {...settings}>
                        {banners.map((banner, index) => (
                            <Link to={banner.link} key={index}>
                                <img src={banner.img} alt={`Banner ${index + 1}`} />
                            </Link>
                        ))}
                    </Slider>
                    <button className="prev" onClick={handlePrevClick}>&lt;</button>
                    <button className="next" onClick={handleNextClick}>&gt;</button>
                </div>
            )}
        </>
    );
}

export default Home;
