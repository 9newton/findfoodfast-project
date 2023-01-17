import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "react-bootstrap/Pagination";

function AdminReport() {
  const [reports, setReport] = useState([]);
  const [show, setShow] = useState(false);
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const [showPagination, setShowPagination] = React.useState(true);

  // const Pagination = () => {
  //   if (numberOfPages > 5) {
  //     setShowPagination(false);
  //   }
  // };

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  useEffect(() => {
    getReports();
  }, [pageNumber, subject, category]);

  const getReports = async () => {
    fetch(
      `http://localhost:5000/reports?page=${pageNumber}&subject=${subject}&category=${category}`
    )
      .then((response) => response.json())
      .then(({ totalPages, data }) => {
        setReport(data);
        setNumberOfPages(totalPages);
        console.log(totalPages.length);
        if (totalPages > 5) {
          setShowPagination(false);
        }
      });
  };

  const deleteReport = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/reports/${id}`);
      getReports();
      alertsubmit();
    } catch (error) {
      console.log(error);
    }
  };
  const alertsubmit = () =>
    toast.success("ลบเรียบร้อยแล้ว!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });

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
        <aside className={`sidebar ${show ? "showed" : null}`}>
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
                  <FaInbox className="mb-1" /> แจ้งปัญหา
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
                  onChange={(e) =>
                    setSubject(e.target.value) & setPageNumber("")
                  }
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
                  onChange={(e) =>
                    setCategory(e.target.value) & setPageNumber("")
                  }
                >
                  <option selected hidden>
                    เลือกหัวข้อ
                  </option>
                  <option value="">ทั้งหมด</option>
                  <option value="แจ้งปัญหาเว็บไซต์">แจ้งปัญหาเว็บไซต์</option>
                  <option value="แจ้งร้านปิดให้บริการ">
                    แจ้งร้านปิดให้บริการ
                  </option>
                  <option value="หมุดไม่ตรงกับสถานที่จริง">
                    หมุดไม่ตรงกับสถานที่จริง
                  </option>
                  <option value="อื่นๆ">อื่นๆ</option>
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
                        {reports.map((data, index) => (
                          <tr key={data._id}>
                            <td>
                              {Moment(data.created_at).format("MM/DD/YYYY")}
                            </td>
                            <td>{data.category}</td>
                            <td>{data.subject}</td>
                            <td>{data.details}</td>
                            <td>
                              <Link
                                onClick={() => deleteReport(data._id)}
                                className="button is-info is-small mr-1"
                              >
                                <FaTrash className="text-danger" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <ToastContainer />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 12, offset: 0 }}
                className="mt-4"
              >
                {showPagination ? (
                  <Pagination>
                    <Pagination.Prev onClick={gotoPrevious} />
                    {pages.map((pageIndex) => (
                      <Pagination.Item
                        key={pageIndex}
                        onClick={() => setPageNumber(pageIndex)}
                        active={pageNumber === pageIndex}
                      >
                        {pageIndex + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={gotoNext} />
                  </Pagination>
                ) : null}
                {!showPagination ? (
                  <Pagination>
                    <Pagination.Prev onClick={gotoPrevious} />
                    <Pagination.Item
                      key={0}
                      onClick={() => setPageNumber(0)}
                      active={pageNumber === 0}
                    >
                      {1}
                    </Pagination.Item>
                    <Pagination.Ellipsis
                      key={pages.length / 2}
                      onClick={() => setPageNumber(pages.length / 2)}
                      active={pageNumber === pages.length / 2}
                    />
                    <Pagination.Item
                      key={pages.length}
                      onClick={() => setPageNumber(pages.length - 1)}
                      active={pageNumber === pages.length - 1}
                    >
                      {pages.length}
                    </Pagination.Item>
                    <Pagination.Next onClick={gotoNext} />
                  </Pagination>
                ) : null}
                <div className="page-of mb-5">
                  Page : {pageNumber + 1} of {pages.length}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
}

export default AdminReport;
