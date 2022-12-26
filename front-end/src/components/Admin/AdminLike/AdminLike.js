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

function AdminLike() {
  const [users, setUser] = useState([]);

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
  )

}

export default AdminLike;

