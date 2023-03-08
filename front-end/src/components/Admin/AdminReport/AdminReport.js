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
import { FaTrash, FaInbox } from "react-icons/fa";
import Moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import MenuAdmin from "../AdminMenu/MenuAdmin";

function AdminReport() {
  // Get Data
  const [reports, setReport] = useState([]);
  // Delete Data
  const [reportId, setReportId] = useState();
  // Nav
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
    axios
      .get(
        `/reports?page=${pageNumber}&subject=${subject}&category=${category}&pageSize=${pageSize}&sort=${sort}`
      )
      .then((response) => response.data)
      .then(({ totalPages, data }) => {
        setReport(data);
        setNumberOfPages(totalPages);
        if (totalPages > 5) {
          setShowPagination(false);
        } else {
          setShowPagination(true);
        }
      });
  };
  const deleteReport = async (id) => {
    try {
      await axios.delete(`/reports/${id}`);
      getReports();
      alertsubmit();
    } catch (error) {
      console.log(error);
    }
  };

  // alert
  const alertsubmit = () => {
    toast.success("ลบเรียบร้อยแล้ว!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
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
              <FaInbox className="mb-1" /> แจ้งข้อมูล
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
              onChange={(e) => setSubject(e.target.value) & resetPageNumber()}
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
              onChange={(e) => setSort(e.target.value) & resetPageNumber()}
            >
              <option value="-1" selected>
                ใหม่ที่สุดไปเก่าที่สุด
              </option>
              <option value="1">เก่าที่สุดไปใหม่ที่สุด</option>
            </Form.Select>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Form.Select
              className="soi-btn pointer mt-2 mb-4 mt-md-0 text-center"
              aria-label="Select Category"
              onChange={(e) => setCategory(e.target.value) & resetPageNumber()}
            >
              <option selected hidden>
                เลือกหัวข้อ
              </option>
              <option value="">ทั้งหมด</option>
              <option value="แจ้งปัญหาเว็บไซต์">แจ้งปัญหาเว็บไซต์</option>
              <option value="แจ้งร้านปิดให้บริการ">แจ้งร้านปิดให้บริการ</option>
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
                        <td>{Moment(data.created_at).format("DD/MM/YYYY")}</td>
                        <td>{data.category}</td>
                        <td>{data.subject}</td>
                        <td>{data.details}</td>

                        <td>
                          <Link
                            onClick={() => handleOpen() & setReportId(data._id)}
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
          <span>คุณต้องการจะลบรายงานนี้ใช่หรือไม่?</span>
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
            onClick={() => deleteReport(reportId) & handleClose()}
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

export default AdminReport;
