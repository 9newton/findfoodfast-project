import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaChartLine } from "react-icons/fa";
import MenuAdmin from "../AdminMenu/MenuAdmin";

function AdminDashboard() {
  // The total number of visitor Count Website
  const [visitorCountWeb, setVisitorCountWeb] = useState([]);
  // The total number of restaurants
  const [restaurants, setRestaurants] = useState(null);
  // Top rating restaurant
  const [topRating, setTopRating] = useState([]);
  // Most view restaurant
  const [mostView, setMostView] = useState([]);
  // The total number of tags
  const [aLaCarte, setALaCarte] = useState([]);
  const [noodle, setNoodle] = useState([]);
  const [beverage, setBeverage] = useState([]);
  const [steak, setSteak] = useState([]);
  const [shabu, setShabu] = useState([]);
  const [grill, setGrill] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [fruit, setFruit] = useState([]);


  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      navigate("/teamLogin");
    } else {
      setIsAuthenticated(true);
      usedAllExpress();
    }
  }, []);

  ///////Express
  const usedAllExpress = () => {
    getVisitorCount();
    getAllRestaurants();
    getTopRating();
    getMostView();
    getCountWithTag();
  };
  // Get Visitor Count Website
  const getVisitorCount = async () => {
    const response = await fetch('http://localhost:5000/visitor');
    if (response.ok) {
      const visitorCount = await response.json();
      setVisitorCountWeb(visitorCount);
    } else {
      console.error('Request failed with status: ' + response.status);
    }
  };
  // Get All Restaurants
  const getAllRestaurants = async () => {
    const response = await fetch("http://localhost:5000/random");
    if (response.ok) {
      const allRestaurants = await response.json();
      setRestaurants(allRestaurants.length);
    } else {
      console.error('Request failed with status: ' + response.status);
    }
  };
  // Get Top Rating Restaurants
  const getTopRating = async () => {
    const response = await fetch(
      `http://localhost:5000/adminDashboard/topRating`
    );
    const topRestaurant = await response.json();
    setTopRating(topRestaurant);
  };
  // Get Most View Restaurants
  const getMostView = async () => {
    const response = await fetch(
      `http://localhost:5000/adminDashboard/mostView`
    );
    const mostViewRestaurant = await response.json();
    setMostView(mostViewRestaurant);
  };
  // Get the total number of A La Carte
  const getCountWithTag = async () => {
    const response = await fetch(
      `http://localhost:5000/adminDashboard/countWithTag`
    );
    const countWithTag = await response.json();
    setALaCarte(countWithTag.countALaCarte);
    setNoodle(countWithTag.countNoodle);
    setBeverage(countWithTag.countBeverage);
    setSteak(countWithTag.countSteak);
    setShabu(countWithTag.countShabu);
    setGrill(countWithTag.countGrill);
    setSnacks(countWithTag.countSnacks);
    setDessert(countWithTag.countDessert);
    setFruit(countWithTag.countFruit);
  };

  return isAuthenticated ? (
    <div className="content">
      <MenuAdmin />
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            className="mt-md-4 mb-4 mb-md-0"
          >
            <h1 className="content-head-admin mb-2 mt-4 mt-md-0">
              <FaChartLine className="mb-1" /> แดชบอร์ด
            </h1>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 mb-xl-0">
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 8, offset: 2 }}
            xl={{ span: 6, offset: 0 }}
            className="mt-md-4"
          >
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 5, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Form.Label className="name h5" htmlFor="inputPassword5">
                  สถิติ
                </Form.Label>
              </Col>
            </Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              className="mt-md-4 mt-2 mt-md-0 col"
            >
              <Card className="card-dashboard-web">
                <Card.Body>
                  <div className="title-dashboard-main mt-4 mb-4">
                    <div className="h5">ยอดการเข้าใช้เว็บ</div>
                    <div className="vertical-blue"></div>
                    {visitorCountWeb.map((data, index) => (
                      <div className="h1">{data.visitorCount}</div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              className="mt-md-4 mt-4 mt-md-0"
            >
              <Card className="card-dashboard">
                <Card.Body>
                  <div className="title-dashboard-main mt-4 mb-4">
                    <div className="h5">ร้านอาหารทั้งหมด</div>
                    <div className="vertical"></div>
                    <div className="h1">{restaurants}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Card className="card-dashboard bg-yellow">
                  <Card.Body>
                    <div className="title-dashboard">
                      <div className="h5 mb-4">
                        <span>ร้านที่มีจำนวนคนกดดาวเยอะที่สุด</span>
                      </div>
                      <div className="h2">
                        <div className="h2 mt-2">
                          <span>{topRating.name}</span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Card className="card-dashboard bg-lowblue">
                  <Card.Body>
                    <div className="title-dashboard">
                      <div className="h5 mb-4">
                        <span>ร้านที่มีจำนวนคนกดเข้าดูเยอะที่สุด</span>
                      </div>
                      <div className="h2 mt-2">
                        <span>{mostView.name}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 5, offset: 1 }}
            className="mt-md-4 mt-4 mt-md-0"
          >
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 5, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Form.Label className="name h5" htmlFor="inputPassword5">
                  หมวดหมู่ร้านอาหาร
                </Form.Label>
              </Col>
            </Row>
            <Row className="mt-2 mt-md-0">
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">อาหารจานเดียว</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{aLaCarte}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ก๋วยเตี๋ยว</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{noodle}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">เครื่องดื่ม</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{beverage}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">สเต็ก</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{steak}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ชาบู</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{shabu}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">หมูกะทะ</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{grill}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ของทานเล่น</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{snacks}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ของหวาน</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{dessert}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ผลไม้</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">{fruit}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  ) : null;
}

export default AdminDashboard;