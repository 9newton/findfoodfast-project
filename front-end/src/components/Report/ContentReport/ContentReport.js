import React, { useState } from "react";
import "./ContentReport.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Popup from 'react-popup';

function ContentReport() {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");

  const saveReport = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/reports", {
        subject,
        category,
        details,
      });
      alert("แจ้งเรื่องเรียบร้อยแล้ว");
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setSubject("");
    setCategory("");
    setDetails("");
  };

  return (
    <Form onSubmit={saveReport}>
      <div className="content-report">
        <h1 className="content-head mb-4 mt-4 mt-md-0">แจ้งปัญหาอะไรดี?</h1>
        <Container>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 2 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5 " htmlFor="inputPassword5">
                หัวข้อ
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
              md={{ span: 12, offset: 2 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5 " htmlFor="inputPassword5">
                เรื่อง
              </Form.Label>
              <Form.Control
                type="text"
                className="form-input"
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
              md={{ span: 12, offset: 2 }}
              xl={{ span: 4, offset: 3 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5" htmlFor="inputPassword5">
                รายละเอียด
              </Form.Label>
              <Form.Control
                className="form-detail-report"
                as="textarea"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="รายละเอียดที่ต้องการแจ้ง"
                rows={7}
                required
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
