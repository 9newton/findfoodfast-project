import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./ContentAdmin.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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

function Content() {
  const [restaurants, setRestaurant] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    name: "",
    alley: "",
  });

  const handleSearch = useCallback((event, type) => {
    setInput((prev) => {
      prev[type] = event.target.value.trim();
      return { ...prev };
    });
  }, []);

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

  const restaurantList = useMemo(() => {
    if (restaurants !== null) {
      const result = restaurants.filter((data) => {
        const nameValid = input.name
          ? data.name.includes(input.name) || data.food.includes(input.name)
          : true;
        const alleyValid = input.alley
          ? data.alley.includes(input.alley)
          : true;
        return nameValid && alleyValid;
      });

      return (
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            className="form"
          >
            <Card className="card-admin">
              <Card.Body>
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
                    {result.map((data, index) => (
                      <tr key={data._id}>
                        <td>
                          <Link
                            to={`/admin/manageRestaurant/addImage/${data._id}/${data.name}/${data.alley}`}
                          >
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
                            to={`/admin/manageRestaurant/edit/${data._id}`}
                            className="button is-info is-small mr-1"
                          >
                            <FaEdit className="font-blue" />
                          </Link>
                        </td>
                        <td>
                          <Link
                            onClick={() => deleteRestaurant(data._id)}
                            className="button is-info is-small mr-1"
                          >
                            <FaTrash className="text-danger" />
                          </Link>
                        </td>
                        <td>
                          <Link to={data.coverImg}>
                            <Image src={data.coverImg} className="img-avatar" />
                          </Link>
                        </td>
                        <td>{data.name}</td>
                        <td>{data.food}</td>
                        <td>
                          {data.timeOpen}-{data.timeClose}
                        </td>
                        <td>
                          {data.holiday.map((holiday, indexHoliday) =>
                            data.holiday.length - 1 === indexHoliday ? (
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
                        <td>{data.ratePrice}</td>
                        <td>
                          Tel: {data.tel}
                          <br />
                          Line: {data.line}
                          <br />
                          FB: {data.facebook}
                        </td>
                        <td>
                          {data.delivery.map((delivery, indexDelivery) =>
                            data.delivery.length - 1 === indexDelivery ? (
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
                          {data.tag.map((tag, indexTag) =>
                            data.tag.length - 1 === indexTag ? (
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
                        <td>{data.alley}</td>
                        <td>{data.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    } else {
      return <div>NO DATA</div>;
    }
  }, [restaurants, input]);
  return (
    <main className={show ? "space-toggle" : null}>
      <div>
        <header className={`header-admin ${show ? "space-toggle" : null}`}>
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <FaBars
              className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}
            />
          </div>
        </header>

        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav">
            <div>
              <Link to="/" className="nav-logo">
                <FaHome className={`fas fa-home-alt nav-logo-icon`} />
                <span className="nav-logo-name">หน้าหลัก</span>
              </Link>

              <div className="nav-list">
                <Link to="/admin" className="nav-link">
                  <FaChartLine className="fas fa-tachometer-alt nav-link-icon mt-1" />
                  <span className="nav-link-name">แดชบอร์ด</span>
                </Link>
                <Link to="/admin/manageRestaurant" className="nav-link active">
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

            {/* <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link> */}
          </nav>
        </aside>
        <div className="content">
          <Container>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 12, offset: 0 }}
                className="mt-md-4"
              >
                <h1 className="content-head-admin mb-4 mt-4 mt-md-0">
                  <FaUtensils className="mb-2" /> ร้านอาหาร
                </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 5, offset: 0 }}
                xl={{ span: 3, offset: 0 }}
                className="mt-md-4"
              >
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  className="form-search"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Search"
                  value={input.name}
                  onChange={(e) => handleSearch(e, "name")}
                />
              </Col>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 2, offset: 5 }}
                className="mt-md-4"
              >
                <Form.Select
                  className="soi-btn pointer mt-2 mb-4 mt-md-0 text-center"
                  aria-label="Default select example"
                  value={input.alley}
                  onChange={(e) => handleSearch(e, "alley")}
                >
                  <option selected hidden>
                    เลือกซอย
                  </option>
                  <option value="">ทั้งหมด</option>
                  <option value="ซอยสะพานชมพู">ซอยสะพานชมพู</option>
                  <option value="ซอยมาลี">ซอยมาลี</option>
                  <option value="ซอยซูม">ซอยซูม</option>
                  <option value="ซอย 4B">ซอย 4B</option>
                  <option value="ซอยหมูแฮม">ซอยหมูแฮม</option>
                  <option value="ซอย RS">ซอย RS</option>
                  <option value="ซอยพรธิสาร">ซอยพรธิสาร</option>
                  <option value="ซอย Icon">ซอย Icon</option>
                  <option value="ซอยอีสเทิร์น">ซอยอีสเทิร์น</option>
                </Form.Select>
              </Col>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 3, offset: 0 }}
                xl={{ span: 2, offset: 0 }}
                className="mt-md-0"
              >
                <Link to="/admin/manageRestaurant/add">
                  <button className="col-12 add-manage-btn mt-0 mt-md-4 mb-4">
                    <FaPlus className="mb-1" /> เพิ่มร้านอาหาร
                  </button>
                </Link>
              </Col>
            </Row>
            <div>{restaurantList}</div>;
          </Container>
        </div>
      </div>
    </main>
  );
}

export default Content;
