import React, { useState, useEffect } from "react";
import "./ContentAdmin.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaInbox } from "@react-icons/all-files/fa/FaInbox";
import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";
import Image from "react-bootstrap/Image";
import MenuAdmin from "../AdminMenu/MenuAdmin";

function Content() {
  const [restaurants, setRestaurant] = useState([]);
  const [show, setShow] = useState(false);


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
              <Link to='/admin/manageRestaurant' className='nav-link active'>
                <FaUtensils className='fas fa-dollar-sign nav-link-icon mt-1' />
                <span className='nav-link-name'>ร้านอาหาร</span>
              </Link>
              <Link to='/admin/like' className='nav-link'>
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
      <h1 className="content-head mb-4 mt-4 mt-md-0">เพิ่มร้านอาหารเลย!</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            xl={{ span: 3, offset: 0 }}
            className="mt-md-4"
          >
            <Form.Control
              type="text"
              id="inputPassword5"
              className="form-search"
              aria-describedby="passwordHelpBlock"
              placeholder="Search"
            />
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 4, offset: 4 }}
            xl={{ span: 2, offset: 7 }}
            className="mt-md-4"
          >
            <Form.Select
              className="soi-btn pointer mt-2 mb-4 mt-md-0"
              aria-label="Default select example"
            >
              <option className="text-center">เลือกซอย</option>
              <option className="text-center" value="1">
                ซอยพร
              </option>
              <option className="text-center" value="2">
                ซอยมาลี
              </option>
              <option className="text-center" value="3">
                ซอยอีสเทิร์น
              </option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            className="form"
          >
            <Card className="card-admin">
              <Card.Body>
                <Link to="/admin/manageRestaurant/add">
                  <button className="col-12 offset-0 col-md-2 offset-md-10 mt-0 add-manage-btn">
                    <FaPlus className="mb-1" /> เพิ่มร้านอาหาร
                  </button>
                </Link>
                <Table className="text-center" responsive hover>
                  <thead>
                    <tr>
                      <th></th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                      <th>รูปร้าน</th>
                      <th>ชื่อร้าน</th>
                      <th>อาหารที่ขาย</th>
                      <th>เวลาเปิด-ปิด</th>
                      <th>วันหยุด</th>
                      <th>เรทราคา</th>
                      <th>ช่องทางติดต่อ</th>
                      <th>บริการส่ง</th>
                      <th>หมวดหมู่</th>
                      <th>ซอย</th>
                      <th>ที่ตั้ง</th>
                    </tr>
                  </thead>
                  <tbody>
                    {restaurants.map((restaurant, index) => (
                      <tr key={restaurant._id}>
                        <td>
                          <Link to={`/admin/manageRestaurant/addImage/${restaurant._id}/${restaurant.name}/${restaurant.alley}`}>
                            <button
                              className="add-img"
                              variant="outline-primary"
                            >
                              เพิ่มรูป
                            </button>
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/admin/manageRestaurant/edit/${restaurant._id}`}
                            className="button is-info is-small mr-1"
                          >
                            <FaEdit className="font-blue" />
                          </Link>
                        </td>
                        <td>
                          <Link
                            onClick={() => deleteRestaurant(restaurant._id)}
                            className="button is-info is-small mr-1"
                          >
                            <FaTrash className="text-danger" />
                          </Link>
                        </td>
                        <td>
                          <Link to={restaurant.coverImg}>
                            <Image
                              src={restaurant.coverImg}
                              className="img-avatar"
                            />
                          </Link>
                        </td>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.food}</td>
                        <td>
                          {restaurant.timeOpen}-{restaurant.timeClose}
                        </td>
                        <td>
                          {restaurant.holiday.map((holiday, indexHoliday) =>
                            restaurant.holiday.length - 1 === indexHoliday ? (
                              <span key={indexHoliday + "holiday"}>
                                {holiday}
                                <br />
                              </span>
                            ) : (
                              <span key={indexHoliday + "holiday"}>
                                {holiday}
                                <br />
                              </span>
                            )
                          )}
                        </td>
                        <td>{restaurant.ratePrice}</td>
                        <td>
                          Tel: {restaurant.tel}
                          <br />
                          Line: {restaurant.line}
                          <br />
                          FB: {restaurant.facebook}
                        </td>
                        <td>
                          {restaurant.delivery.map((delivery, indexDelivery) =>
                            restaurant.delivery.length - 1 === indexDelivery ? (
                              <span key={indexDelivery + "delivery"}>
                                {delivery}
                                <br />
                              </span>
                            ) : (
                              <span key={indexDelivery + "delivery"}>
                                {delivery}
                                <br />
                              </span>
                            )
                          )}
                        </td>
                        <td>
                          {restaurant.tag.map((tag, indexTag) =>
                            restaurant.tag.length - 1 === indexTag ? (
                              <span key={indexTag + "tag"}>
                                {tag}
                                <br />
                              </span>
                            ) : (
                              <span key={indexTag + "tag"}>
                                {tag}
                                <br />
                              </span>
                            )
                          )}
                        </td>
                        <td>{restaurant.alley}</td>
                        <td>{restaurant.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div >
    </div>
  </main>
   
  );
}

export default Content;
