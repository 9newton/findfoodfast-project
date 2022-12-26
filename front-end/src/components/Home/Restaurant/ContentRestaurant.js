import React, { useState, useEffect } from "react";
import "./ContentRestaurant.css";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgCover from "../../../image/test1.jpg";
import Button from "react-bootstrap/Button";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

function ContentRestaurant() {
  return (
    <div className="content-restaurant">
      <h1 className="content-head mb-4 mt-4 mt-md-0">เครปไส้แตก</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 8, offset: 2 }}
            xxl={{ span: 6, offset: 3 }}
            className="mt-4 form"
          >
            <Card className="card-restaurant">
              <Card.Body className="card-body-unset">
                <Row>
                  <Col
                    xs={{ span: 12, offset: 0 }}
                    md={{ span: 4, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    className=" form"
                  >
                    <img className="img-cover" src={ImgCover} alt="" />
                  </Col>
                  <Col
                    xs={{ span: 6, offset: 0 }}
                    md={{ span: 4, offset: 0 }}
                    xl={{ span: 3, offset: 0 }}
                    className=" form"
                  >
                    <div className="mt-3">
                    <p className="heading-name">อาหารที่ขาย</p>
                    <p className="description">เครป</p>
                    <p className="heading-name">เวลาเปิด - ปิด</p>
                    <p className="description">17:00 - 22:00 น.</p>
                    <p className="heading-name">วันหยุดของร้าน</p>
                    <p className="description">เปิดทุกวัน</p>
                    <p className="heading-name">เรทราคา</p>
                    <p className="description">40 - 100 บาท</p>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 6, offset: 0 }}
                    md={{ span: 4, offset: 0 }}
                    xl={{ span: 3, offset: 1 }}
                    className=" form"
                  >
                    <div className="mt-3">
                    <p className="heading-name">ช่องทางติดต่อ</p>
                    <p className="description">- 0984781350</p>
                    <p className="heading-name">บริการส่ง</p>
                    <p className="description">- ทางร้านส่งเอง</p>
                    <p className="description">- Foodpanda</p>
                    <p className="description">- Lineman</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentRestaurant;
