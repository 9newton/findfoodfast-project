import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", userData);
      localStorage.setItem("jwt", response.data.token);
      window.location.href = "/admin";
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="content-report">
      <h1 className="content-head mb-4 mt-4 mt-md-0">ล็อคอิน</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
              xxl={{ span: 4, offset: 4 }}
              className="mt-4 form"
            >
              <Form.Label className="name h5 " htmlFor="username">
                ชื่อผู้ใช้
              </Form.Label>
              <Form.Control
                type="text"
                className="form-name"
                placeholder="ชื่อผู้ใช้"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
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
              <Form.Label className="name h5 " htmlFor="password">
                รหัสผ่าน
              </Form.Label>
              <Form.Control
                type="text"
                className="form-name"
                placeholder="รหัสผ่าน"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
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
      </form>
    </div>
  );
}

export default Login;