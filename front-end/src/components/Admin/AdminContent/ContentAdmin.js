import React, { useEffect, useState } from "react";
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
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaBars,
  FaHome,
  FaChartLine,
  FaStar,
  FaInbox,
  FaUtensils,
  FaMapMarkedAlt,
  FaRegTimesCircle,
} from "react-icons/fa";
import Image from "react-bootstrap/Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import MenuAdmin from "../AdminMenu/MenuAdmin";

function Content() {
  // Get Data
  const [restaurants, setRestaurant] = useState([]);
  // Delete Data
  const [restaurantId, setRestaurantId] = useState();
  // Nav
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  // Filter And Search
  const [searchInput, setSearchInput] = useState("");
  const [tag, setTag] = useState("");
  const [alley, setAlley] = useState("");
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
  }, [pageNumber, searchInput, tag, alley, pageSize]);

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
      `http://localhost:5000/restaurants?page=${pageNumber}&search=${searchInput}&tag=${tag}&alley=${alley}&pageSize=${pageSize}`
    )
      .then((response) => response.json())
      .then(({ totalPages, data }) => {
        setRestaurant(data);
        setNumberOfPages(totalPages);
        if (totalPages > 5) {
          setShowPagination(false);
        } else {
          setShowPagination(true);
        }
      });
  };
  const deleteRestaurant = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/restaurants/${id}`);
      getRestaurants();
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
              <FaUtensils className="mb-2" /> ร้านอาหาร
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
              <option value="ผลไม้">ผลไม้</option>
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
            className="form"
          >
            <Card className="card-admin">
              <Card.Body>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  md={{ span: 4, offset: 8 }}
                  xl={{ span: 2, offset: 10 }}
                  className="mt-md-0"
                >
                  <Link to="/admin/manageRestaurant/add">
                    <button className="col-12 add-manage-btn mt-0 mt-md-0 mb-0">
                      <FaPlus className="mb-1" /> เพิ่มร้านอาหาร
                    </button>
                  </Link>
                </Col>
                <Table className="text-center table" responsive hover>
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
                    {restaurants.map((data, index) => (
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
                            onClick={() =>
                              handleOpen() & setRestaurantId(data._id)
                            }
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
                          {data.tel !== "-" && <div>Tel: {data.tel}</div>}
                          {data.line !== "-" && <div>Line: {data.line}</div>}
                          {data.facebook !== "-" && (
                            <div>FB: {data.facebook}</div>
                          )}
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
                        {data.location == "" ? (
                          <td className="text-danger">
                            <FaRegTimesCircle />
                          </td>
                        ) : (
                          <td className="text-success">
                            <FaMapMarkedAlt />
                          </td>
                        )}
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
            <h4 className="name">ยืนยันการลบ</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <span>คุณต้องการจะลบร้านอาหารใช่หรือไม่?</span>
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
            onClick={() => deleteRestaurant(restaurantId) & handleClose()}
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
              onChange={(e) => setPageSize(e.target.value) & resetPageNumber()}
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
    </div>
  );
}

export default Content;
