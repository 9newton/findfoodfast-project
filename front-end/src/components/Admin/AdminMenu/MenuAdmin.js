import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaChartLine, FaStar, FaInbox, FaUtensils } from 'react-icons/fa';
import Card from "react-bootstrap/Card";
import admin2 from "../../../image/admin2.png";
import admin3 from "../../../image/admin3.png";
import admin4 from "../../../image/admin4.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Content from "../AdminContent/ContentAdmin";
import AdminLike from "../AdminLike/AdminLike";

const MenuAdmin = () => {
  const [show, setShow] = useState(false);
  const Logout = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  };
  return (
    <nav className="nav">
      <div>
        <Link to="/" className="nav-logo">
          <FaHome className={`fas fa-home-alt nav-logo-icon`} />
          <span className="nav-logo-name">หน้าหลัก</span>
        </Link>

        <div className="nav-list">
          <Link to="/admin" className="nav-link active">
            <FaChartLine className="fas fa-tachometer-alt nav-link-icon mt-1" />
            <span className="nav-link-name">แดชบอร์ด</span>
          </Link>
          <Link to="/admin/manageRestaurant" className="nav-link">
            <FaUtensils className="fas fa-dollar-sign nav-link-icon mt-1" />
            <span className="nav-link-name">ร้านอาหาร</span>
          </Link>
          <Link to="/admin/like" className="nav-link">
            <FaStar className="fas fa-hotel nav-link-icon mt-1" />
            <span className="nav-link-name">ยอดดาว</span>
          </Link>
          <Link to="/admin/report" className="nav-link">
            <FaInbox className="fas fa-image nav-link-icon mt-1" />
            <span className="nav-link-name">แจ้งปัญหา</span>
          </Link>
        </div>
      </div>

      <div to='/logout' className='nav-link'>
        <i className='fas fa-sign-out nav-link-icon'></i>
        <span className='nav-link-name' onClick={Logout}>Logout</span>
      </div>
    </nav>
  );
};

export default MenuAdmin;
