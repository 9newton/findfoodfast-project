import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
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
      const response = await axios.post(
        "http://localhost:5000/login",
        userData
      );
      localStorage.setItem("token", response.data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    } else {
      navigate("/teamLogin");
    }
  }, []);

  return (
    <div className="content-report">
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          xl={{ span: 4, offset: 4 }}
          xxl={{ span: 4, offset: 4 }}
        >
          <Card className="card-login">
            <h1 className="content-head mb-4 mt-4 mt-md-4">ล็อคอิน</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <Container>
                <Row>
                  <Col
                    xs={{ span: 12, offset: 0 }}
                    md={{ span: 10, offset: 1 }}
                    xl={{ span: 10, offset: 1 }}
                    xxl={{ span: 10, offset: 1 }}
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
                    md={{ span: 10, offset: 1 }}
                    xl={{ span: 10, offset: 1 }}
                    xxl={{ span: 10, offset: 1 }}
                    className="mt-4 form"
                  >
                    <Form.Label className="name h5 " htmlFor="password">
                      รหัสผ่าน
                    </Form.Label>
                    <Form.Control
                      type="password"
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
                    md={{ span: 10, offset: 1 }}
                    xl={{ span: 10, offset: 1 }}
                    xxl={{ span: 10, offset: 1 }}
                    className="mt-4 form"
                  >
                    <button type="submit" className="col-12 login-btn mb-5">
                      เข้าสู่ระบบ
                    </button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
