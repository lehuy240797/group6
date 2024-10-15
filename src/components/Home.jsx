import "../css/Home.css";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const sliderRef = useRef(null);
    const path = process.env.PUBLIC_URL;

    const banners = [
        { img: `${path}/assets/images/home/banner01.webp`, link: '/BigBang' },
        { img: `${path}/assets/images/home/banner02.webp`, link: '/EoE' },
        { img: `${path}/assets/images/home/banner03.webp`, link: '/Planets' },
        { img: `${path}/assets/images/home/banner04.webp`, link: '/Constellation' },
        { img: `${path}/assets/images/home/banner05.webp`, link: '/Comets' }
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
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

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
