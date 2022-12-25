import React, { useState } from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaHamburger } from "@react-icons/all-files/fa/FaHamburger";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import Logo from '../image/Logo.png';
import { NavLink } from "react-router-dom";

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            /* ffffffffffffffffffffffffffffffffffffffffff */
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/admin"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    About
                </NavLink>
            </nav>
            /* ffffffffffffffffffffffffffffffffffffffffff */
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="/"><img className='img-logo' src={Logo} /></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="/">หน้าหลัก</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="/random">สุ่มร้านอาหาร</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="/report">แจ้งปัญหา</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FaAngleLeft />
                        ) : (
                            <FaHamburger />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;