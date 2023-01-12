import React, { useState, useEffect } from "react";
import "./AdminReport.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaInbox } from "@react-icons/all-files/fa/FaInbox";
import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";
import Moment from "moment";

function AdminReport() {
  const [reports, setReport] = useState([]);
  const [show, setShow] = useState(false);
  // var date = new Date(report.createdAt);
  // var formattedDate = format(date, "MMMM do, yyyy H:mma");

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    const response = await axios.get("http://localhost:5000/reports");
    setReport(response.data);
  };

  const deleteReport = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/reports/${id}`);
      getReports();
    } catch (error) {
      console.log(error);
    }
  };

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
                <Link to="/admin/like" className="nav-link">
                  <FaStar className="fas fa-hotel nav-link-icon mt-1" />
                  <span className="nav-link-name">ยอดดาว</span>
                </Link>
                <Link to="/admin/report" className="nav-link active">
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
                  แจ้งปัญหา
                </h1>
              </Col>
            </Row>
          </Container>
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
                  className="soi-btn pointer mt-2 mb-4 mt-md-0 text-center"
                  aria-label="Default select example"
                >
                  <option selected hidden>
                    เลือกหัวข้อ
                  </option>
                  <option value="แจ้งปัญหาเว็บไซต์">แจ้งปัญหาเว็บไซต์</option>
                  <option value="แจ้งร้านปิดให้บริการ">
                    แจ้งร้านปิดให้บริการ
                  </option>
                  <option value="หมุดไม่ตรงกับสถานที่จริง">
                    หมุดไม่ตรงกับสถานที่จริง
                  </option>
                </Form.Select>
              </Col>
            </Row>

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
                          <th>วันที่</th>
                          <th>หัวข้อ</th>
                          <th>เรื่อง</th>
                          <th>รายละเอียด</th>
                          <th>ลบ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reports.map((report, index) => (
                          <tr key={report._id}>
                            <td>
                              {Moment(report.created_at).format("MM/DD/YYYY")}
                            </td>
                            <td>{report.category}</td>
                            <td>{report.subject}</td>
                            <td>{report.details}</td>
                            <td>
                              <Link
                                onClick={() => deleteReport(report._id)}
                                className="button is-info is-small mr-1"
                              >
                                <FaTrash className="text-danger" />
                              </Link>
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
  );
}

export default AdminReport;
