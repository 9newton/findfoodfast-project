import React, { useState } from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaHamburger } from "@react-icons/all-files/fa/FaHamburger";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import Logo from '../image/Logo.png';

function Header() {
    // return (
    //     <div className="header">
    //         <Navbar className="navbar" bg="white">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <img className='img-logo' src={Logo}/>
    //       </Navbar.Brand>
    //       <Nav>
    //         <Nav.Link href="#home">หน้าหลัก</Nav.Link>
    //         <Nav.Link href="#features">สุ่มร้านอาหาร</Nav.Link>
    //         <Nav.Link href="#pricing">แจ้งปัญหา</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    //     </div>
    // )

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#"><img className='img-logo' src={Logo}/></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">หน้าหลัก</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">สุ่มร้านอาหาร</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">แจ้งปัญหา</a>
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