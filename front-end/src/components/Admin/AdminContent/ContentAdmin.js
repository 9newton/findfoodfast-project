import React, { useState, useEffect } from 'react';
import './ContentAdmin.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import Popup from './Popup';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Edit from './Edit';

function Content() {
  const [restaurants, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const response = await axios.get("http://localhost:5000/restaurants");
    setRestaurant(response.data);
  };

  const deleteRestaurant = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/restaurants/${id}`);
      getRestaurants();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content">
      <h1 className='content-head mb-4 mt-4 mt-md-0'>เพิ่มร้านอาหารเลย!</h1>
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
              <option className='text-center' value="1">อาหารตามสั่ง</option>
              <option className='text-center' value="2">ของทานเล่น</option>
              <option className='text-center' value="3">เครื่องดื่ม</option>
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
                    {restaurants.map((restaurant, index) => (
                      <tr key={restaurant._id}>
                        <td>
                          <button to={`edit/${restaurant._id}`}>
                            {/* <Edit /> */}
                          </button>
                        </td>
                        <td>{index + 1}</td>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.food}</td>
                        <td>
                          {restaurant.timeOpen}-{restaurant.timeClose}
                        </td>
                        <td>{restaurant.holiday}</td>
                        <td>{restaurant.ratePrice}</td>
                        <td>
                          Tel: {restaurant.tel}<br />
                          Line: {restaurant.line}<br />
                          FB: {restaurant.facebook}
                        </td>
                        <td>{restaurant.delivery}</td>
                        <td>{restaurant.tag}</td>
                        <td>{restaurant.alley}</td>
                        <td>{restaurant.location}</td>
                        <td>
                          <button
                            onClick={() => deleteRestaurant(restaurant._id)}
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
        <Popup />
      </Container>

    </div>
  )

}

export default Content;