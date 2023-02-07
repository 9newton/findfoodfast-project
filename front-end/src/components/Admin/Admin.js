import React, { useState } from "react";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import MenuAdmin from "./AdminMenu/MenuAdmin";
import Content from "./AdminContent/ContentAdmin";
import { FaBars } from "react-icons/fa";
import AdminLike from "./AdminLike/AdminLike";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function Admin() {
  const [show, setShow] = useState(false);

  return <div className="admin"></div>;
}

export default Admin;
