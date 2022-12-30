import React, { useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaHamburger } from "@react-icons/all-files/fa/FaHamburger";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import Logo from "../image/Logo3.png";
import { NavLink } from "react-router-dom";

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
            <a href="/admin">
              <img className="img-logo" src={Logo} />
            </a>
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
                แจ้งปัญหา
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
