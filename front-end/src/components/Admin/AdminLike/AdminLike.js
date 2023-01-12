import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./AdminLike.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaInbox } from "@react-icons/all-files/fa/FaInbox";
import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";

function AdminLike() {
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
            className=" form"
          >
            <Card className="card-admin">
              <Card.Body>
                <Table responsive="sm text-center">
                  <thead>
                    <tr>
                      <th>อันดับ</th>
                      <th>
                        คะแนนดาวเฉลี่ย <FaStar className="mb-1" />
                      </th>
                      <th>ชื่อร้าน</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((data, index) => (
                      <tr key={data._id}>
                        <td>{index + 1}</td>
                        <td></td>
                        <td>{data.name}</td>
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
                <Link to="/admin/manageRestaurant" className="nav-link">
                  <FaUtensils className="fas fa-dollar-sign nav-link-icon mt-1" />
                  <span className="nav-link-name">ร้านอาหาร</span>
                </Link>
                <Link to="/admin/like" className="nav-link active">
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
                  <FaStar className="mb-2" /> เรทติ้งดาว
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
                md={{ span: 4, offset: 3 }}
                xl={{ span: 2, offset: 7 }}
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
            </Row>
            <div>{restaurantList}</div>;
          </Container>
        </div>
      </div>
    </main>
  );
}

export default AdminLike;
