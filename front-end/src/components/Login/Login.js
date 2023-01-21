import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Popup from 'react-popup';

function Login() {
  return (
    <div className="content-report">
      <h1 className="content-head mb-4 mt-4 mt-md-0">ล็อคอิน</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 4 }}
            xxl={{ span: 4, offset: 4 }}
            className="mt-4 form"
          >
            <Form.Label className="name h5 " htmlFor="inputPassword5">
              ชื่อผู้ใช้
            </Form.Label>
            <Form.Control
              type="text"
              className="form-name"
              placeholder="ชื่อผู้ใช้"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 4 }}
            xxl={{ span: 4, offset: 4 }}
            className="mt-4 form"
          >
            <Form.Label className="name h5 " htmlFor="inputPassword5">
              รหัสผ่าน
            </Form.Label>
            <Form.Control
              type="text"
              className="form-name"
              placeholder="รหัสผ่าน"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 4 }}
            xxl={{ span: 4, offset: 4 }}
            className="mt-4 form"
          >
            <button type="submit" className="col-12 login-btn">
              เข้าสู่ระบบ
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
