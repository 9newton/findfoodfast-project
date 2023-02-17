import React, { useEffect, useState } from "react";
import "./AdminLike.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaStar, FaRedoAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import MenuAdmin from "../AdminMenu/MenuAdmin";
import { getApiUrl } from "../../../api.js";

function AdminLike() {
  // Get Data
  const [restaurants, setRestaurant] = useState([]);
  // Nav
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
    getRestaurants();
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
    getRestaurants();
  };

  // Express
  const getRestaurants = async () => {
    fetch(
      `http://${getApiUrl()}/restaurants?page=${pageNumber}&search=${searchInput}&tag=${tag}&alley=${alley}&pageSize=${pageSize}&sort=${sort}`
    )
      .then((response) => response.json())
      .then(({ totalPages, data, totalData }) => {
        setRestaurant(data);
        setNumberOfPages(totalPages);
        setTotalData(totalData);
        if (totalPages > 5) {
          setShowPagination(false);
        } else {
          setShowPagination(true);
        }
      });
  };
  const resetRating = async () => {
    try {
      await axios.put(`http://${getApiUrl()}/restaurants/resetRating`);
      getRestaurants();
      alertsubmit();
    } catch (error) {
      console.log(error);
    }
  };

  // alert
  const alertsubmit = () => {
    toast.success("รีเซ็ตเรตติ้งเรียบร้อยแล้ว!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
  };

  // Sorting And Filter
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    resetPageNumber();
  };
  const handleTagChange = (e) => {
    setTag(e.target.value);
    resetPageNumber();
  };
  const handleAlleyChange = (e) => {
    setAlley(e.target.value);
    resetPageNumber();
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
    resetPageNumber();
  };

  // others
  const resetPageNumber = () => {
    setPageNumber(0);
  };

  return (
    <div className="content">
      <MenuAdmin />
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            className="mt-md-4"
          >
            <h1 className="content-head-admin mb-4 mt-4 mt-md-0">
              <FaStar className="mb-2" /> เรตติ้งดาว
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
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            xl={{ span: 3, offset: 2 }}
            className="mt-md-4"
          >
            <Form.Select
              className="soi-btn pointer mt-2 mb-4 mt-md-0 text-center"
              aria-label="Select Sort"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="-1" selected>
                คะแนนสูงสุดไปต่ำสุด
              </option>
              <option value="1">คะแนนต่ำสุดไปสูงสุด</option>
            </Form.Select>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Form.Select
              className="soi-btn pointer mt-4 mb-2 mt-md-0 text-center"
              aria-label="Select Alley"
              value={tag}
              onChange={handleTagChange}
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
              <option value="ผลไม้">ผลไม้</option>
            </Form.Select>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Form.Select
              className="soi-btn pointer mt-0 mb-4 mt-md-0 text-center"
              aria-label="Select Alley"
              value={alley}
              onChange={handleAlleyChange}
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
                <Col
                  xs={{ span: 12, offset: 0 }}
                  md={{ span: 4, offset: 8 }}
                  xl={{ span: 2, offset: 10 }}
                  className="mt-md-0 mb-md-4 mb-xl-0"
                >
                  <button
                    className="col-12 add-manage-btn mt-0 mt-md-0 mb-0"
                    onClick={() => handleOpen()}
                  >
                    <FaRedoAlt className="mb-1" /> รีเซ็ตเรตติ้ง
                  </button>
                </Col>

                <Table responsive="sm text-center">
                  <thead>
                    <tr>
                      <th>อันดับ</th>
                      <th>เรตติ้ง</th>
                      <th>ชื่อร้าน</th>
                    </tr>
                  </thead>
                  <tbody>
                    {restaurants.map((data, index) => (
                      <tr key={data._id}>
                        {sort == -1 ? (
                          <td> {pageNumber * pageSize + (index + 1)}</td>
                        ) : (
                          <td>
                            {" "}
                            {totalData +
                              1 -
                              (pageNumber * pageSize + (index + 1))}
                          </td>
                        )}
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
        <Modal
          show={open}
          size="lg"
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h4 className="name">ยืนยันการรีเซ็ต</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>คุณต้องการจะรีเซ็ตเรตติ้งทั้งหมดใช่หรือไม่?</span>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-danger"
              className="btn-modal mt-1 mt-xl-0"
              onClick={handleClose}
            >
              ยกเลิก
            </Button>
            <button
              className="btn-modal submit mt-0"
              onClick={() => resetRating() & handleClose()}
            >
              ตกลง
            </button>
          </Modal.Footer>
        </Modal>
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
  );
}

export default AdminLike;
