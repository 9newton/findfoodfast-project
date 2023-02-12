import React, { useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaHamburger, FaAngleLeft } from "react-icons/fa";
import Logo from "../image/Logo3.png";
import { NavLink, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <Link to="/admin/dashboard">
              <Image className="img-logo" src={Logo} />
            </Link>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                หนัาหลัก
              </NavLink>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <NavLink
                to="/random"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                สุ่มร้านอาหาร
              </NavLink>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <NavLink
                to="/report"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                แจ้งข้อมูล
              </NavLink>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FaAngleLeft /> : <FaHamburger />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
