import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../../../image/hero.png";
import Image from "react-bootstrap/Image";
import { FaChartLine } from 'react-icons/fa';

function AdminDashboard() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );

  return (
    <div className="content">
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            className="mt-md-4 mb-4 mb-md-0"
          >
            <h1 className="content-head-admin mb-2 mt-4 mt-md-0">
              <FaChartLine className="mb-1" /> แดชบอร์ด
            </h1>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 mb-xl-0">
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 8, offset: 2 }}
            xl={{ span: 6, offset: 0 }}
            className="mt-md-4"
          >
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 5, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Form.Label className="name h5" htmlFor="inputPassword5">
                  สถิติ
                </Form.Label>
              </Col>
            </Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              className="mt-md-4 mt-2 mt-md-0 col"
            >
              <Card className="card-dashboard-web">
                <Card.Body>
                  <div className="title-dashboard-main mt-4 mb-4">
                    <div className="h5">ยอดการเข้าใช้เว็บ</div>
                    <div className="vertical-blue"></div>
                    <div className="h1">1,339</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              className="mt-md-4 mt-4 mt-md-0"
            >
              <Card className="card-dashboard">
                <Card.Body>
                  <div className="title-dashboard-main mt-4 mb-4">
                    <div className="h5">ร้านอาหารทั้งหมด</div>
                    <div className="vertical"></div>
                    <div className="h1">250</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Card className="card-dashboard bg-yellow">
                  <Card.Body>
                    <div className="title-dashboard">
                      <div className="h5 mb-4">
                        <span>ร้านที่มีจำนวนคนกดดาวเยอะที่สุด</span>
                      </div>
                      <div className="h2">
                        <div className="h2 mt-2">
                          <span>เครปไส้แตก</span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Card className="card-dashboard bg-lowblue">
                  <Card.Body>
                    <div className="title-dashboard">
                      <div className="h5 mb-4">
                        <span>ร้านที่มีจำนวนคนกดเข้าดูเยอะที่สุด</span>
                      </div>
                      <div className="h2 mt-2">
                        <span>ข้าวต้มมหาชัย</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 5, offset: 1 }}
            className="mt-md-4 mt-4 mt-md-0"
          >
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 5, offset: 0 }}
                className="mt-md-4 mt-4 mt-md-0"
              >
                <Form.Label className="name h5" htmlFor="inputPassword5">
                  หมวดหมู่ร้านอาหาร
                </Form.Label>
              </Col>
            </Row>
            <Row className="mt-2 mt-md-0">
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">อาหารจานเดียว</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">57</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ก๋วยเตี๋ยว</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">20</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">เครื่องดื่ม</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">36</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">สเต็ก</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">23</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ชาบู</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">4</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">หมูกะทะ</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">6</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ของทานเล่น</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">60</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ของหวาน</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">14</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                className="mt-md-4 col"
              >
                <Card className="card-dashboard-small">
                  <Card.Body>
                    <div className="font-blue mb-2">
                      <span className="span">ผลไม้</span>
                    </div>
                    <div className="font-blue h1 mt-0">
                      <span className="tag-value">8</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-transparent">
              <Card.Body>
                <div className="hero">
                  <Image className="img-logo" src={Hero} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default AdminDashboard;
