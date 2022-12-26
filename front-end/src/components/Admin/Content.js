import React, { useState, useEffect } from 'react';
import './Content.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import Popup from './Popup';
import axios from "axios";
import { Link } from "react-router-dom";

function Content() {
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
      <h1 className='content-head mb-4 mt-4 mt-md-0'>แอดมิน</h1>

      <div className='col-10 offset-1 col-md-6 offset-md-3 col-xl-2 offset-xl-5 mb-4 form'>
        <Form.Control
          type="text"
          id="inputPassword5"
          className='form-name'
          aria-describedby="passwordHelpBlock"
          placeholder='Search'
        />
      </div>

      <div className='col-10 offset-1 col-xl-10 form'>
        <Card className='card-body'>
          <Card.Body>

            <div className='select'>
              <Form.Select className='tag-btn' aria-label="Default select example">
                <option className='text-center'>เลือกซอย</option>
                <option className='text-center' value="1">อาหารตามสั่ง</option>
                <option className='text-center' value="2">ของทานเล่น</option>
                <option className='text-center' value="3">เครื่องดื่ม</option>
              </Form.Select>
            </div>

            <Table responsive="sm text-center">
              <thead>
                <tr>
                  <th>EDIT</th>
                  <th>ID</th>
                  <th>ชื่อร้าน</th>
                  <th>อาหารที่ขาย</th>
                  <th>เวลาเปิด-ปิด</th>
                  <th>วันหยุด</th>
                  <th>เรทราคา</th>
                  <th>ช่องทางติดต่อ</th>
                  <th>บริการส่ง</th>
                  <th>TAG</th>
                  <th>ซอย</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
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
        <Popup />
      </div>
    </div>
  )

}

export default Content;

