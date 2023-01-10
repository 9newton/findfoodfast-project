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
            className="mt-md-4"
          >
            <h1 className="content-head-admin mb-2 mt-4 mt-md-0">แดชบอร์ด</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 6, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-web">
              <Card.Body>
                <div className="title-dashboard-main mt-4 mb-4">
                  <div className="h5">ยอดการเข้าใช้เว็บ</div>
                  <div class="vertical-blue"></div>
                  <div className="h1">1,339</div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>อาหารจานเดียว</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>57</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>ก๋วยเตี๋ยว</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>20</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>เครื่องดื่ม</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>36</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 6, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard">
              <Card.Body>
                <div className="title-dashboard-main mt-4 mb-4">
                  <div className="h5">ร้านอาหารทั้งหมด</div>
                  <div class="vertical"></div>
                  <div className="h1">250</div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>สเต็ก</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>23</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>ชาบู</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>4</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>หมูกะทะ</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>6</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 3, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard bg-yellow">
              <Card.Body>
                <div className="title-dashboard">
                  <div className="h5 mb-4">
                    <span>ร้านที่มีจำนวนคนกดดาวเยอะที่สุด</span>
                  </div>
                  <div className="h1">เครปไส้แตก</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 3, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard bg-lowblue">
              <Card.Body>
                <div className="title-dashboard">
                  <div className="h5 mb-4">
                    <span>ร้านที่มีจำนวนคนกดเข้าดูเยอะที่สุด</span>
                  </div>
                  <div className="h1">ข้ามต้มมหาชัย</div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>ของทานเล่น</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>60</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>ของหวาน</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>14</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            className="mt-md-4"
          >
            <Card className="card-dashboard-small">
              <Card.Body>
                <div className="font-blue mb-4">
                  <span>ผลไม้</span>
                </div>
                <div className="font-blue h1 mt-4">
                  <span>8</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Container>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              xl={{ span: 12, offset: 0 }}
              className="mt-5"
            >
              <h1 className="content-head-admin mb-2 mt-4 mt-md-0">ทีม</h1>
            </Col>
          </Row>
        </Container>

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
      </Container>
    </div>
  );
}

export default AdminDashboard;
