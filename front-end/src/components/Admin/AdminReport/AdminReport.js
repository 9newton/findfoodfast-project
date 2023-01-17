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
import { FaTrash, FaBars, FaHome, FaChartLine, FaStar, FaInbox, FaUtensils } from 'react-icons/fa';
import Moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import "react-toastify/dist/ReactToastify.css";


function AdminReport() {
  // Get Data
  const [reports, setReport] = useState([]);
  // Delete Data
  const [reportId, setReportId] = useState();
  // Nav
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  // Filter And Search
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  // Sort
  const [sort, setSort] = useState(-1);
  // Pagination
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const [showPagination, setShowPagination] = React.useState(true);
  // Modal
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  useEffect(() => {
    getReports();
  }, [pageNumber, subject, category, pageSize, sort]);

  // Pagination
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  // Express
  const getReports = async () => {
    fetch(
      `http://localhost:5000/reports?page=${pageNumber}&subject=${subject}&category=${category}&pageSize=${pageSize}&sort=${sort}`
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

  // alert
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

  // others
  const resetPageNumber = () => {
    setPageNumber(0);
  }


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
                    setSubject(e.target.value) & resetPageNumber()
                  }
                />
              </Col>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 4, offset: 3 }}
                xl={{ span: 2, offset: 7 }}
                className="mt-md-4"
              >
                <>
                  <Form.Select
                    className="soi-btn pointer mt-2 mb-4 mt-md-0 text-center"
                    aria-label="Select Sort"
                    onChange={(e) =>
                      setSort(e.target.value) & resetPageNumber()
                    }
                  >
                    <option value="-1" selected>เรียงใหม่สุดไปเก่าสุด</option>
                    <option value="1">
                      เรียงจากเก่าไปใหม่สุด
                    </option>
                  </Form.Select>
                </>
                <Form.Select
                  className="soi-btn pointer mt-2 mb-4 mt-md-0 text-center"
                  aria-label="Select Category"
                  onChange={(e) =>
                    setCategory(e.target.value) & resetPageNumber()
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
                              {Moment(data.created_at).format("DD/MM/YYYY")}
                            </td>
                            <td>{data.category}</td>
                            <td>{data.subject}</td>
                            <td>{data.details}</td>

                            <td>
                              <Link
                                onClick={() =>
                                  handleOpen() & setReportId(data._id)
                                }
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
          <Modal
            show={open}
            size="lg"
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <h1 className="name">ยืนยันการลบ</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>คุณต้องการจะลบใช่หรือไม่?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-danger"
                className="mt-1 mt-xl-2"
                onClick={handleClose}
              >
                ยกเลิก
              </Button>
              <Button
                className="add-manage-btn mt-0"
                onClick={() => deleteReport(reportId) & handleClose()}
              >
                ตกลง
              </Button>
            </Modal.Footer>
          </Modal>
          <Container>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 12, offset: 0 }}
                className="mt-4"
              >
                <div>
                  show
                  <Form.Select
                    className="text-center"
                    aria-label="Default select Page Size"
                    onChange={(e) =>
                      setPageSize(e.target.value) & resetPageNumber()
                    }
                  >
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </Form.Select>
                  data
                </div>
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