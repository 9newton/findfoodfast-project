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
import { FaLine } from "@react-icons/all-files/fa/FaLine";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

function ContentRestaurant() {
  return (
    <div className="content-restaurant">
      <h1 className="content-head mb-4 mt-0 mt-md-0">เครปไส้แตก</h1>
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
                    xxl={{ span: 4, offset: 0 }}
                    className=" form"
                  >
                    <img className="img-cover" src={ImgCover} alt="" />
                  </Col>
                  <Col
                    xs={{ span: 6, offset: 0 }}
                    md={{ span: 3, offset: 0 }}
                    xl={{ span: 3, offset: 0 }}
                    className=" form"
                  >
                    <div className="mt-3 l">
                      <p className="heading-name">อาหารที่ขาย</p>
                      <p className="description">เครป</p>
                      <p className="heading-name">เวลาเปิด - ปิด</p>
                      <p className="description">17:00 - 22:00 น.</p>
                      <p className="heading-name">วันหยุดของร้าน</p>
                      <p className="description">เปิดทุกวัน</p>
                      <p className="heading-name">เรทราคา</p>
                      <p className="description">40 - 100 บาท</p>
                      {/* <span className="tag mx-1">ของทานเล่น</span><span className="tag">เครื่องดื่ม</span> */}
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 6, offset: 0 }}
                    md={{ span: 3, offset: 0 }}
                    xl={{ span: 3, offset: 0 }}
                    className=" form"
                  >
                    <div className="mt-3">
                      <p className="heading-name">ช่องทางติดต่อ</p>
                      <p className="description">
                        <FaPhone className="heading-name icon-call mb-1" />{" "}
                        0984781350
                      </p>
                      <p className="description">
                        <FaLine className="heading-name icon-line mb-1" /> -
                      </p>
                      <p className="description">
                        <FaFacebook className="heading-name icon-fb mb-1" />{" "}
                        เครปไส้แตก
                      </p>
                      <p className="heading-name">บริการส่ง</p>
                      <p className="description">
                        ทางร้านส่งเอง, Foodpanda, Lineman
                      </p>
                      <p className="heading-name">
                        <FaMapMarkerAlt className="text-danger" /> ซอยพรธิสาร
                      </p>
                    </div>
                  </Col>
                  {/* <Col
                    xs={{ span: 6, offset: 0 }}
                    md={{ span: 1, offset: 0 }}
                    xl={{ span: 2, offset: 0 }}
                    className=" form"
                  >
                    <div className="mt-2">
                      <Button className="btn btn-link like">
                        <FaHeart />LIKE
                      </Button>
                    </div>
                  </Col> */}
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
