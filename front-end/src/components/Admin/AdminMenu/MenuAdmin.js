import React from "react";
import "./MenuAdmin.css";
import Card from 'react-bootstrap/Card';
import admin1 from "../../../image/admin1.png";
import admin2 from "../../../image/admin2.png";
import admin3 from "../../../image/admin3.png";
import admin4 from "../../../image/admin4.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MenuAdmin() {
  return (
    <div className="content-admin">
      <h1 className="content-head mb-5">จัดการอะไรดี?</h1>

      <Container>
      <Row>
        <Col xs={{ span: 12 ,offset : 0}} md={{ span: 6 ,offset : 0}} xl={{ span: 3}} className="mt-md-4 mt-xl-5">
        <a href="/admin/manageRestaurant">
        <Card className="card-menu-food card-menu">
          <Card.Body className="card-body">
            <h4>เพิ่มร้านอาหาร</h4>
            <img className='img' src={admin1} alt=""/>
          </Card.Body>
        </Card>
        </a>
        </Col>
        
        <Col xs={{ span: 12 ,offset : 0}} md={{ span: 6 ,offset : 0}} xl={{ span: 3, offset: 0 }} className="mt-4 mt-xl-5">
        <a href="/admin/like">
        <Card className="card-menu-like card-menu">
          <Card.Body className="card-body">
          <h4>ยอดถูกใจ</h4>
          <img className='img' src={admin2} alt=""/>
          </Card.Body>
        </Card>
        </a>
        </Col>
        <Col xs={{ span: 12 ,offset : 0}} md={{ span: 6 ,offset : 0}} xl={{ span: 3}} className="mt-4 mt-xl-5">
        <a href="/admin/report">
        <Card className="card-menu-report card-menu">
          <Card.Body className="card-body">
            <h4>แจ้งปัญหา</h4>
            <img className='img-report' src={admin3} alt=""/>
          </Card.Body>
        </Card>
        </a>
        </Col>
        <Col xs={{ span: 12 ,offset : 0}} md={{ span: 6 ,offset : 0}} xl={{ span: 3}} className="mt-4 mt-xl-5">
        <a href="/admin/dashboard">
        <Card className="card-menu-dashboard card-menu">
          <Card.Body className="card-body">
          <h4>แดชบอร์ด</h4>
          <img className='img' src={admin4} alt=""/>
          </Card.Body>
        </Card>
        </a>
        </Col>
      </Row>
      </Container>

      <div className="col-12 col-xl-12 mt-4 mb-2 add-con">
              <a href="/"><button type="submit" className="goto-web-btn">
                ไปหน้าเว็ปไซต์
              </button>
              </a>
            </div>

    </div>
  );
}

export default MenuAdmin;
