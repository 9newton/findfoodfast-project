import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../image/Logo.png';

function Header() {
    return (
        <div className="header">
            <Navbar className="navbar" bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo}/>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">หน้าหลัก</Nav.Link>
            <Nav.Link href="#features">สุ่มร้านอาหาร</Nav.Link>
            <Nav.Link href="#pricing">แจ้งปัญหา</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header;