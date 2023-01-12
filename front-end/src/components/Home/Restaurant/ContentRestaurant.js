import React, { useState, useEffect, useRef } from "react";
import "./ContentRestaurant.css";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaLine } from "@react-icons/all-files/fa/FaLine";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

function ContentRestaurant({ restaurant }) {
  const [updateRating, setUpdateRating] = useState("");
  const [prevRating, setPrevRating] = useState("");
  const ratingStars = {
    size: 30,
    count: 5,
    isHalf: false,
    value: 0,
    color: "grey",
    activeColor: "#ffd700",
  };
  const ratingChanged = async (newRating) => {
    console.log(newRating);
    try {
      const point = {
        1: "oneStar",
        2: "twoStar",
        3: "threeStar",
        4: "fourStar",
        5: "fiveStar",
      };
      alert("ให้คะแนนร้านค้าเรียบร้อยแล้ว!");

      const selectedRating = point[newRating];
      console.log(selectedRating);
      console.log(prevRating);

      await axios.put(
        `http://localhost:5000/restaurants/rating/${restaurant._id}`,
        {
          prevRating: "none",
          updateRating: selectedRating,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content-restaurant">
      <h1 className="content-head mb-4 mt-0 mt-md-0">ร้านอาหาร</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            xl={{ span: 10, offset: 1 }}
            xxl={{ span: 10, offset: 1 }}
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
                    <Image
                      className="img-cover"
                      src={restaurant?.coverImg}
                      alt=""
                    />
                  </Col>
                  <Col
                    xs={{ span: 12, offset: 0 }}
                    md={{ span: 8, offset: 0 }}
                    xl={{ span: 6, offset: 0 }}
                    xxl={{ span: 6, offset: 0 }}
                    className=" form"
                  >
                    <div className="mt-4 xs offset-md-0">
                      <span className="h3">{restaurant?.name}</span>
                      <ReactStars {...ratingStars} onChange={ratingChanged} />
                    </div>
                    <Row>
                      <Col
                        xs={{ span: 6, offset: 0 }}
                        md={{ span: 5, offset: 0 }}
                        xl={{ span: 7, offset: 0 }}
                        xxl={{ span: 7, offset: 0 }}
                        className=" form"
                      >
                        <div className="mt-4 mb-5 l">
                          <p className="heading-name">อาหารที่ขาย</p>
                          <p className="description">{restaurant?.food}</p>
                          <p className="heading-name">เวลาเปิด - ปิด</p>
                          <p className="description">
                            {restaurant?.timeOpen} - {restaurant?.timeClose}
                          </p>
                          <p className="heading-name">วันหยุดของร้าน</p>
                          <p className="description">
                            {restaurant?.holiday.toString()}
                          </p>
                          <p className="heading-name">เรทราคา</p>
                          <p className="description">
                            {restaurant?.ratePrice} บาท
                          </p>
                        </div>
                      </Col>

                      <Col
                        xs={{ span: 6, offset: 0 }}
                        md={{ span: 7, offset: 0 }}
                        xl={{ span: 5, offset: 0 }}
                        xxl={{ span: 5, offset: 0 }}
                        className=" form"
                      >
                        <div className="mt-4 mb-4">
                          <p className="heading-name">ช่องทางติดต่อ</p>
                          <p className="description">
                            <FaPhone className="heading-name icon-call mb-1" />{" "}
                            {restaurant?.tel}
                          </p>
                          <p className="description">
                            <FaLine className="heading-name icon-line mb-1" /> -
                          </p>
                          <p className="description">
                            <FaFacebook className="heading-name icon-fb mb-1" />{" "}
                            {restaurant?.facebook}
                          </p>
                          <p className="heading-name">บริการส่ง</p>
                          <p className="description">
                            {restaurant?.delivery.toString()}
                          </p>
                          <div className="mt-2 offset-md-0 location-md">
                            <Link to="https://goo.gl/maps/t3FGmaA5oXeMxrpp6">
                              <span className="heading-location p">
                                <FaMapMarkerAlt className="text-danger" />{" "}
                                {restaurant?.alley}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={{ span: 12, offset: 0 }}
                    md={{ span: 2, offset: 0 }}
                    xl={{ span: 2, offset: 0 }}
                    xxl={{ span: 2, offset: 0 }}
                    className="location-xl"
                  >
                    <div className="mt-5 offset-4 offset-md-0">
                      <span className="heading-location p">
                        <FaMapMarkerAlt className="text-danger" />{" "}
                        {restaurant?.alley}
                      </span>
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
