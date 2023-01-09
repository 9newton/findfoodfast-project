import React, { useState, useEffect } from 'react';
import './AdminLike.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaInbox } from "@react-icons/all-files/fa/FaInbox";
import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";
import MenuAdmin from '../AdminMenu/MenuAdmin';

function AdminLike() {
  const [users, setUser] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={show ? "space-toggle" : null}>
    <div>
      <header
        className={`header-admin ${show ? "space-toggle" : null}`}
      >
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <FaBars
            className={`fas fa-bars ${
              show ? "fa-solid fa-xmark" : null
            }`}
          />
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
      <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <FaHome className={`fas fa-home-alt nav-logo-icon`} />
              <span className='nav-logo-name'>หน้าหลัก</span>
            </Link>

            <div className='nav-list'>
              <Link to='/admin' className='nav-link'>
                <FaChartLine className='fas fa-tachometer-alt nav-link-icon mt-1' />
                <span className='nav-link-name'>แดชบอร์ด</span>
              </Link>
              <Link to='/admin/manageRestaurant' className='nav-link'>
                <FaUtensils className='fas fa-dollar-sign nav-link-icon mt-1' />
                <span className='nav-link-name'>ร้านอาหาร</span>
              </Link>
              <Link to='/admin/like' className='nav-link active'>
                <FaStar className='fas fa-hotel nav-link-icon mt-1' />
                <span className='nav-link-name'>ยอดดาว</span>
              </Link>
              <Link to='/admin/report' className='nav-link'>
                <FaInbox className='fas fa-image nav-link-icon mt-1' />
                <span className='nav-link-name'>แจ้งปัญหา</span>
              </Link>
            </div>
          </div>

          {/* <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link> */}
        </nav>
      </aside>
      <div className="content">
      <h1 className='content-head mb-4 mt-4 mt-md-0'>ยอดถูกใจ</h1>
    <Container>
      <Row>
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 0 }} className="mt-md-4"><Form.Control
          type="text"
          id="inputPassword5"
          className='form-search'
          aria-describedby="passwordHelpBlock"
          placeholder='Search'
        /></Col>
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }} xl={{ span: 2, offset: 7 }} className="mt-md-4">
        <Form.Select className='soi-btn pointer mt-2 mb-4 mt-md-0' aria-label="Default select example">
                <option className='text-center'>เลือกซอย</option>
                <option className='text-center' value="1">ซอยพร</option>
                <option className='text-center' value="2">ซอยมาลี</option>
                <option className='text-center' value="3">ซอยอีสเทิร์น</option>
              </Form.Select>
        </Col>
      </Row>

      <Row>
    <Col xs={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }} className=" form">
    <Card className='card-admin'>
      <Card.Body>
      <Table responsive="sm text-center">
              <thead>
                <tr>
                  <th>จำนวนถูกใจ</th>
                  <th>ชื่อร้าน</th>
                  <th>อาหารที่ขาย</th>
                  <th>ช่องทางติดต่อ</th>
                  <th>หมวดหมู่อาหาร</th>
                  <th>ซอย</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.food}</td>
                    <td>{user.day}</td>
                    <td>
                      <Link to={`edit/${user._id}`}>
                        Edit
                      </Link></td>
                    <td>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className=""
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
      </Card.Body>
    </Card>
      </Col>
      </Row>
    </Container>
  
    </div>
    </div>
  </main>
    
  )

}

export default AdminLike;

