import React from "react";
import "./Banner.css";
import { FaSearch } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import { ScrollDown, ScrollLink } from "./BannerElements";

let bannerData = {
  title: "FIND FOOD FAST KLONG 6",
  desc1: "เว็บไซต์ค้นหาร้านอาหาร",
  desc2: "บริเวณ มทร.ธัญบุรี",
};

function Banner() {
  return (
    <div className="banner mb-xl-5">
      <div className="banner-bg">
        <div className="container">
          <div className="banner-con">
            <div className="banner-text">
              <div className="py-3">
                <ReactTypingEffect
                  text={bannerData.title}
                  speed={80}
                  eraseDelay={100}
                  className="title"
                ></ReactTypingEffect>
              </div>
              <h1>{bannerData.desc1}</h1>
              <h1>{bannerData.desc2}</h1>
              <div className="py-4"></div>
              <ScrollDown to="search" style={{ textDecoration: 'none' }}>
                <ScrollLink >
                  <button className="banner-btn" >
                    <FaSearch /> ค้นหาร้านอาหาร
                  </button>
                </ScrollLink>
              </ScrollDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
