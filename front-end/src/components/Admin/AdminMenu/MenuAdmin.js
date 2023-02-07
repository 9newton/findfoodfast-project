import React, { useState } from "react";
import "./MenuAdmin.css";
import { FaHamburger, FaAngleLeft } from "react-icons/fa";
import Logo from "../../../image/Logo3.png";
import { NavLink, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const MenuAdmin = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);
  const Logout = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="sidebar2 mt-4">
        <div className="container">
          <div className="header-con-admin">
            {/* <div className="logo-container">
              <Link to="/admin/dashboard">
                <Image className="img-logo" src={Logo} />
              </Link>
            </div> */}

            <ul className={click ? "menu active" : "menu"}>
              <li className="menu-link" onClick={closeMobileMenu}>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  แดชบอร์ด
                </NavLink>
              </li>
              <li className="menu-link" onClick={closeMobileMenu}>
                <NavLink
                  to="/admin/manageRestaurant"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  ร้านอาหาร
                </NavLink>
              </li>
              <li className="menu-link" onClick={closeMobileMenu}>
                <NavLink
                  to="/admin/like"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  เรตติ้ง
                </NavLink>
              </li>
              <li className="menu-link" onClick={closeMobileMenu}>
                <NavLink
                  to="/admin/report"
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
    </>
  );
};

export default MenuAdmin;
