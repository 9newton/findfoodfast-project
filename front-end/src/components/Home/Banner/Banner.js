import React from 'react'
import "./Banner.css"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import ReactTypingEffect from 'react-typing-effect'
import { Link } from "react-router-dom";

let bannerData = {
    title: "FIND FOOD FAST KLONG 6",
    desc1: "เว็บไซต์ค้นหาร้านอาหาร",
    desc2: "บริเวณ มทร.ธัญบุรี"
}


function Banner() {
    return (
        <div className='banner'>
            <div className="banner-bg">
                <div className="container">
                    <div className="banner-con">
                        <div className="banner-text">
                            <div className='py-3'>
                                <ReactTypingEffect text={bannerData.title} speed={80} eraseDelay={100} className='title'></ReactTypingEffect>
                            </div>
                            <h1>
                                {bannerData.desc1}
                            </h1>
                            <h1>
                                {bannerData.desc2}
                            </h1>
                            <div className='py-4'>

                            </div>
                            <Link to="#" className="banner-btn"><FaSearch /> ค้นหาร้านอาหาร</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;