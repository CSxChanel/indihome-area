// src/components/BannerSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Pastikan untuk mengimpor CSS kustom

// Import gambar
import Baner1 from "../../assets/baner/14-IndihomeTV-720x400px_M.png";
import Baner2 from "../../assets/baner/720-x-400px0_M.jpg";
import Baner3 from "../../assets/baner/Banner_Homepage_Mobile_720x400_M.jpg";
import Baner4 from "../../assets/baner/banner_Lapor_Gangguan_720x400_M.jpg";
import Baner5 from "../../assets/baner/banner_selfcare_720x400_M.jpg";
import Baner6 from "../../assets/baner/banner_tsel_m_M.jpg";
import Baner7 from "../../assets/baner/gamer720-x-400_1_M.jpg";
import Baner8 from "../../assets/baner/Indihome_PL_Homepage_Mobile_720x400_M.jpg";
import Baner9 from "../../assets/baner/Mobile_Homepage_720x400-_MAY_M.jpg";
import Baner10 from "../../assets/baner/Mobile-(720x400)-NETFLIX-2024-(rev5)_M.jpg";
import Baner11 from "../../assets/baner/Movie_LPC_HomepageMobile720x400_M.jpg";
import Baner12 from "../../assets/baner/Paket-IndiHome-Netflix-720-x-400_M.jpg";
import Baner13 from "../../assets/baner/Pay_in_Advance_New_720x400_M.png";
import Baner14 from "../../assets/baner/Tsel-One-Paket-Dynamic-Feb-240201-Banner-Indihome-720x400_M.jpg";

import { CustomNextArrow, CustomPrevArrow } from "./CustomArrow"; // Import komponen tombol navigasi

const banners = [
    Baner1,
    Baner2,
    Baner3,
    Baner4,
    Baner5,
    Baner6,
    Baner7,
    Baner8,
    Baner9,
    Baner10,
    Baner11,
    Baner12,
    Baner13,
    Baner14
];

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />, // Gunakan komponen tombol navigasi
        prevArrow: <CustomPrevArrow /> // Gunakan komponen tombol navigasi
    };

    return (
        <div className="w-full mt-20">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index}>
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
