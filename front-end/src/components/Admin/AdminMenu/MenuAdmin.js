import React, { useState } from "react";
import "./MenuAdmin.css";
import { FaHamburger, FaAngleLeft } from "react-icons/fa";
import Logo from "../../../image/Logo3.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MenuAdmin = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);

  // Modal
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/teamLogin");
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
              <Modal
                show={open}
                size="lg"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <h4 className="name">ยืนยันการออกจากระบบ</h4>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <span>คุณต้องการออกจากระบบใช่หรือไม่?</span>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="outline-danger"
                    className="btn-modal mt-1 mt-xl-0"
                    onClick={handleClose}
                  >
                    ยกเลิก
                  </Button>
                  <button className="btn-modal submit mt-0" onClick={logout}>
                    ตกลง
                  </button>
                </Modal.Footer>
              </Modal>
              <li className="menu-link" onClick={() => handleOpen() & logout}>
                <div className="text-danger pointer">ออกจากระบบ</div>
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
