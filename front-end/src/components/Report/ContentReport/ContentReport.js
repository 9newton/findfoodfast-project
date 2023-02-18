import React, { useState } from "react";
import "./ContentReport.css";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getApiUrl } from "../../../api.js";

function ContentReport() {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");

  const saveReport = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/reports`, {
        subject,
        category,
        details,
      });
      alertsubmit();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  const alertsubmit = () => {
    toast.success("แจ้งเรื่องเรียบร้อยแล้ว", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
  };

  const resetForm = () => {
    setSubject("");
    setCategory("");
    setDetails("");
    setEmail("");
  };

  return (
    <Form onSubmit={saveReport}>
      <div className="content-report">
        <h1 className="content-head mb-4 mt-4 mt-md-0">แจ้งข้อมูลอะไรดี?</h1>
        <Container>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 10, offset: 1 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5 " htmlFor="inputPassword5">
                หัวข้อ<h5 className="text-danger">*</h5>
              </Form.Label>
              <Form.Select
                className="section-btn text-center"
                aria-label="Form select category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" selected hidden>
                  เลือกหัวข้อ
                </option>
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
              md={{ span: 10, offset: 1 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5 " htmlFor="inputPassword5">
                เรื่อง<h5 className="text-danger">*</h5>
              </Form.Label>
              <Form.Control
                type="text"
                className="form-name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="เรื่องที่ต้องการแจ้ง"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 10, offset: 1 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5" htmlFor="inputPassword5">
                รายละเอียด<h5 className="text-danger">*</h5>
              </Form.Label>
              <Form.Control
                className="form-detail-report"
                as="textarea"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="รายละเอียดที่ต้องการแจ้ง"
                rows={4}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 10, offset: 1 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5 " htmlFor="email">
                อีเมล
              </Form.Label>
              <Form.Control
                type="email"
                className="form-name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="อีเมล"
              />
            </Col>
          </Row>
          <div className="col-10 offset-1 col-xl-4 offset-xl-4 mt-4">
            <button type="submit" className="send-btn">
              {" "}
              ส่ง{" "}
            </button>
          </div>
        </Container>
      </div>
    </Form>
  );
}

export default ContentReport;
