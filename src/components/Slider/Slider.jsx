import React from 'react';
import Slider from "react-slick";

export default function TestSlider() {
    const imgs = [
        "img1.webp",
        "img2.webp",
        "img3.webp",
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
       responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    pauseOnHover: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,

                    pauseOnHover: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    dots: true,
                    arrows: false,
                    centerMode: false,
                }
            }
        ]
    };



    return (
        <div className="slider-container">
            <Slider {...settings} className=''>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="px-1 ">
                        <div className='p-4 bg-[#333333] lg:h-80 rounded-lg text-white'>

                            <div className='flex items-center justify-between'>
                                <h3 className='text-white font-semibold text-lg'>Amr Sakr</h3>
                                <div>
                                    {Array.from({ length: 5 }).map((_, i) => {
                                        return <i key={i} className='fa-solid fa-star text-yellow-400'></i>
                                    })}
                                </div>
                            </div>

                            <p className='font-light text-sm mt-2'>4 Dec 2025</p>
                            <p className='mt-4'>“Very comfortable to wear and looks far more expensive than it is. You can really see the attention to detail.”</p>
                            <div className='flex items-center justify-center space-x-2'>
                                {imgs.map((img, i) => {
                                    return <img key={i} className='w-[120px]  aspect-square object-cover rounded-lg inline-block mt-4' src={img} alt="" />
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}