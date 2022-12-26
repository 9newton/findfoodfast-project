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
      <h1 className="content-head mb-4 mt-4 mt-md-0">ร้านอาหาร</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 8, offset: 2 }}
            xxl={{ span: 6, offset: 3 }}
            className="mt-4 form"
          >
            <Card className="card-admin">
              <Card.Body>
                <Row>
                  <Col
                    xs={{ span: 12, offset: 0 }}
                    md={{ span: 12, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    className=" form"
                  >
                    <img className="img-cover" src={ImgCover} alt="" />
                  </Col>
                  <Col
                    xs={{ span: 12, offset: 0 }}
                    md={{ span: 12, offset: 0 }}
                    xl={{ span: 3, offset: 0 }}
                    className=" form"
                  >
                    <span className="h3">เครปไส้แตก </span>
                    <div className="mt-4">
                    <p>อาหารที่ขาย</p>
                    <p>เครป</p>
                    <p>เวลาเปิด - ปิด</p>
                    <p>17:00 - 22:00 น.</p>
                    <p>วันหยุดของร้าน</p>
                    <p>เปิดทุกวัน</p>
                    <p>เรทราคา</p>
                    <p>40 - 100 บาท</p>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 12, offset: 0 }}
                    md={{ span: 12, offset: 0 }}
                    xl={{ span: 3, offset: 1 }}
                    className=" form"
                  >

                    <p>ช่องทางติดต่อ</p>
                    <p>- 0984781350</p>
                    <p>บริการส่ง</p>
                    <p>ทางร้านส่งเอง</p>
                    <p>Foodpanda</p>
                    <p>Lineman</p>
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
