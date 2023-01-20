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
import { FaBars, FaHome, FaChartLine, FaStar, FaInbox, FaUtensils } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";

function AdminLike() {
  // Get Data
  const [restaurants, setRestaurant] = useState([]);
  // Nav
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  // Filter And Search
  const [searchInput, setSearchInput] = useState("");
  const [tag, setTag] = useState("");
  const [alley, setAlley] = useState("");
  // Sort
  const [sort, setSort] = useState(-1);
  const [totalData, setTotalData] = useState();
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
    getRestaurants();
  }, [pageNumber, searchInput, tag, alley, pageSize, sort]);

  // Pagination
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  // Express
  const getRestaurants = async () => {
    fetch(
      `http://localhost:5000/restaurants?page=${pageNumber}&search=${searchInput}&tag=${tag}&alley=${alley}&pageSize=${pageSize}&sort=${sort}`
    )
      .then((response) => response.json())
      .then(({ totalPages, data, totalData }) => {
        setRestaurant(data);
        setNumberOfPages(totalPages);
        setTotalData(totalData.length);
        if (totalPages > 5) {
          setShowPagination(false);
        } else {
          setShowPagination(true);
        }
      });
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
  };

  return (
    <main className={show ? "space-toggle" : null}>

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
              md={{ span: 12, offset: 0 }}
              xl={{ span: 3, offset: 0 }}
              className="mt-md-4"
            >
              <Form.Control
                type="text"
                className="form-search"
                aria-describedby="Search Input"
                placeholder="Search"
                onChange={(e) =>
                  setSearchInput(e.target.value) & resetPageNumber()
                }
              />
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              xl={{ span: 2, offset: 5 }}
              className="mt-md-4"
            >
              <Form.Select
                className="soi-btn pointer mt-2 mb-4 mt-md-0 text-center"
                aria-label="Select Sort"
                onChange={(e) =>
                  setSort(e.target.value) & resetPageNumber()
                }
              >
                <option value="-1" selected>
                  อันดับสูงสุดไปต่ำสุด
                </option>
                <option value="1">อันดับต่ำสุดไปสูงสุด</option>
              </Form.Select>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              xl={{ span: 2, offset: 5 }}
              className="mt-md-4"
            >
              <Form.Select
                className="soi-btn pointer mt-4 mb-2 mt-md-0 text-center"
                aria-label="Select Alley"
                onChange={(e) => setTag(e.target.value) & resetPageNumber()}
              >
                <option selected hidden>
                  เลือกหมวดหมู่
                </option>
                <option value="">ทั้งหมด</option>
                <option value="อาหารจานเดียว">อาหารจานเดียว</option>
                <option value="ก๋วยเตี๋ยว">ก๋วยเตี๋ยว</option>
                <option value="สเต็ก">สเต็ก</option>
                <option value="หมูกะทะ">หมูกะทะ</option>
                <option value="ชาบู">ชาบู</option>
                <option value="ของทานเล่น">ของทานเล่น</option>
                <option value="ของหวาน">ของหวาน</option>
                <option value="เครื่องดื่ม">เครื่องดื่ม</option>
              </Form.Select>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
              className="mt-md-4"
            >
              <Form.Select
                className="soi-btn pointer mt-0 mb-4 mt-md-0 text-center"
                aria-label="Select Alley"
                onChange={(e) => setAlley(e.target.value) & resetPageNumber()}
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
                      {restaurants.map((data, index) => (
                        <tr key={data._id}>
                          {sort == -1 ? (
                            <td> {(pageNumber * pageSize) + (index + 1)}</td>

                          ) :
                            <td> {(totalData + 1) - ((pageNumber * pageSize) + (index + 1))}</td>
                          }
                          <td>{data.avgRating}</td>
                          <td>{data.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Container>
            <Row className="mt-4">
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 2, offset: 0 }}
                xl={{ span: 1, offset: 0 }}
                className="mt-0"
              >
                <Form.Select
                  className="text-center"
                  aria-label="Default select Page Size"
                  onChange={(e) =>
                    setPageSize(e.target.value) & resetPageNumber()
                  }
                >
                  <option value="5" selected>
                    5
                  </option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </Form.Select>
              </Col>
              <Col
                xs={{ span: 5, offset: 3 }}
                md={{ span: 3, offset: 7 }}
                xl={{ span: 4, offset: 3 }}
                className="mt-0"
              >
                <div className="page-of mb-5">
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
                  Page : {pageNumber + 1} of {pages.length}
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </main >
  );
}

export default AdminLike;
