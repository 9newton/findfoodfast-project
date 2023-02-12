import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./ContentRandom.css";
import Img from "../../../image/random.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Image } from "react-bootstrap";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContentRandom() {
  const [restaurants, setRestaurants] = useState(null);
  const [input, setInput] = useState({
    tag: "",
  });
  // hide
  const [showResults, setShowResults] = React.useState(false);
  // end hide
  const handleSearch = useCallback((event, type) => {
    setInput((prev) => {
      prev[type] = event.target.value.trim();
      return { ...prev };
    });
  }, []);

  const fetchrestaurants = useCallback(async () => {
    const response = await axios.get("http://localhost:5000/random");
    setRestaurants(response.data);
  }, []);

  const randomButton = () => {
    setShowResults(true);
    fetchrestaurants();
  };

  useEffect(() => {
    fetchrestaurants();
  }, []);

  const restaurantList = useMemo(() => {
    if (restaurants !== null && showResults) {
      const result = restaurants.filter((data) => {
        const tagValid = input.tag ? data.tag.includes(input.tag) : true;
        return tagValid;
      });
      const length = result.length;
      const random = Math.floor(Math.random() * length);
      const randomFilter = result[random];

      return (
        <div className="mb-5">
          {/* card */}
          {showResults ? (
            <Container key={randomFilter?._id}>
              <Row>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  md={{ span: 8, offset: 2 }}
                  xl={{ span: 6, offset: 3 }}
                  xxl={{ span: 6, offset: 3 }}
                  className="mt-4 form"
                >
                  <Card className="card-restaurant">
                    <Link
                      to={`/home/restaurant/${randomFilter?._id}`}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Body className="card-show-food">
                        <Row>
                          <Col
                            xs={{ span: 6, offset: 0 }}
                            md={{ span: 5, offset: 0 }}
                            xl={{ span: 5, offset: 0 }}
                            xxl={{ span: 5, offset: 0 }}
                            className="show-img"
                          >
                            <Image
                              className="img-cover-show"
                              src={randomFilter?.coverImg}
                              alt=""
                            />
                          </Col>

                          <Col
                            xs={{ span: 6, offset: 0 }}
                            md={{ span: 7, offset: 0 }}
                            xl={{ span: 7, offset: 0 }}
                            xxl={{ span: 7, offset: 0 }}
                            className="show-detail"
                          >
                            <div className="detail-right">
                              <div className="mb-3 name-right">
                                <span className="h2 font-blue">
                                  {randomFilter?.name}
                                </span>
                              </div>
                              <p className="text-dark">
                                อาหารที่ขาย :{" "}
                                <span className="font-blue">
                                  {randomFilter?.food}
                                </span>
                              </p>
                              <p className="text-dark">
                                เวลาเปิด - ปิด :{" "}
                                <span className="font-blue">
                                  {" "}
                                  {randomFilter?.timeOpen}-
                                  {randomFilter?.timeClose} น.
                                </span>
                              </p>
                              <p className="text-dark">
                                วันหยุดของร้าน :{" "}
                                <span className="font-blue">
                                  {randomFilter?.holiday.map(
                                    (holiday, indexHoliday) =>
                                      randomFilter?.holiday.length - 1 ===
                                        indexHoliday ? (
                                        <span key={indexHoliday + "holiday"}>
                                          {holiday}
                                        </span>
                                      ) : (
                                        <span key={indexHoliday + "holiday"}>
                                          {holiday},{" "}
                                        </span>
                                      )
                                  )}
                                </span>
                              </p>
                              <p className="text-dark">
                                เรทราคา :{" "}
                                <span className="font-blue">
                                  {randomFilter?.ratePrice} บาท
                                </span>
                              </p>
                              <p className="font-blue">
                                <FaMapMarkerAlt className="text-danger" />{" "}
                                {randomFilter?.alley}
                              </p>
                              <div className="box-tag">
                                <span>
                                  {randomFilter?.tag.map((tag, indexTag) =>
                                    randomFilter?.tag.length - 1 ===
                                      indexTag ? (
                                      <span
                                        key={indexTag + "tag"}
                                        className="tag mx-1"
                                      >
                                        {tag}
                                      </span>
                                    ) : (
                                      <span
                                        key={indexTag + "tag"}
                                        className="tag"
                                      >
                                        {tag}
                                      </span>
                                    )
                                  )}
                                </span>
                              </div>
                              <p className="link-menu mt-0 mb-0 mt-md-4">
                                <Link
                                  to="/home/restaurant"
                                  className="btn btn-link go-menu"
                                >
                                  ดูเมนูเพิ่มเติม
                                </Link>
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              </Row>
            </Container>
          ) : null}
          {/* end card */}
        </div>
      );
    } else {
      return <div></div>;
    }
  }, [restaurants, showResults]);

  return (
    <div className="content-random">
      <h1 className="content-head mb-0 mt-4 mt-md-0">ไม่รู้จะกินอะไรดี?</h1>
      <div className="col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3 input">
        <Form.Select
          className="tag-btn text-center"
          value={input.tag}
          onChange={(e) => handleSearch(e, "tag")}
        >
          <option value="">ทั้งหมด</option>
          <option value="อาหารจานเดียว">อาหารจานเดียว</option>
          <option value="ก๋วยเตี๋ยว">ก๋วยเตี๋ยว</option>
          <option value="สเต็ก">สเต็ก</option>
          <option value="หมูกะทะ">หมูกะทะ</option>
          <option value="ชาบู">ชาบู</option>
          <option value="ของทานเล่น">ของทานเล่น</option>
          <option value="ของหวาน">ของหวาน</option>
          <option value="เครื่องดื่ม">เครื่องดื่ม</option>
          <option value="ผลไม้">ผลไม้</option>
        </Form.Select>
      </div>
      <div className="col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3 mt-1">
        <button className="random-btn" onClick={randomButton}>
          สุ่มร้านอาหาร
        </button>
      </div>
      {!showResults ? (
        <>
          <Image className="img-random" src={Img} alt="" />
          <div>
            <p className="content-wording mt-5">
              กด”ปุ่มสุ่มร้านอาหาร”เพื่อดูว่าวันนี้จะกินอะไรดี
            </p>
          </div>
        </>
      ) : null}
      {restaurantList}
    </div>
  );
}

export default ContentRandom;
