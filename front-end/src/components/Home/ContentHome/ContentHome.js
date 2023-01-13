import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./ContentHome.css";
import "./Search.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaRedoAlt } from "@react-icons/all-files/fa/FaRedoAlt";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Iframe from "react-iframe";

function Content() {
  const [restaurants, setRestaurant] = useState([]);
  const [input, setInput] = useState({
    tag: "",
    name: "",
    alley: "",
  });

  const handleSearch = useCallback((event, type) => {
    setInput((prev) => {
      prev[type] = event.target.value.trim();
      return { ...prev };
    });
  }, []);

  const handleReset = useCallback(() => {
    setInput({
      tag: "",
      name: "",
      alley: "",
    });
  }, []);

  const fetchrestaurants = useCallback(async () => {
    const response = await axios.get("http://localhost:5000/restaurants");
    setRestaurant(response.data);
  }, []);

  useEffect(() => {
    getRestaurants();
    fetchrestaurants();
  }, []);

  const getRestaurants = async () => {
    const response = await axios.get("http://localhost:5000/restaurants");
    setRestaurant(response.data);
  };

  const restaurantList = useMemo(() => {
    if (restaurants !== null) {
      const result = restaurants.filter((data) => {
        const nameValid = input.name
          ? data.name.includes(input.name) || data.food.includes(input.name)
          : true;
        const tagValid = input.tag ? data.tag.includes(input.tag) : true;
        const alleyValid = input.alley
          ? data.alley.includes(input.alley)
          : true;
        return nameValid && tagValid && alleyValid;
      });
      return (
        <div id="search" className="content-home">
          <div className="input">
            <h1 className="search-head mt-5 mt-xl-5 mb-4 mb-xl-5">
              วันนี้กินอะไรดี?
            </h1>
            <div className="col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
              <InputGroup className="mb-3">
                <select
                  id="input-group-dropdown-1"
                  className="text-center"
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
                </select>

                <Form.Control
                  className="input-search"
                  placeholder="ค้นหาชื่อร้านอาหาร หรือ ชื่ออาหาร"
                  value={input.name}
                  onChange={(e) => handleSearch(e, "name")}
                />
              </InputGroup>
            </div>
          </div>

          <div className="col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
            <Form.Select
              className="select"
              aria-label="Default select example"
              value={input.alley}
              onChange={(e) => handleSearch(e, "alley")}
            >
              <option className="text-center" hidden>
                เลือกซอย
              </option>
              <option className="text-center" value="">
                ทั้งหมด
              </option>
              <option className="text-center" value="ซอยสะพานชมพู">
                ซอยสะพานชมพู
              </option>
              <option className="text-center" value="ซอยมาลี">
                ซอยมาลี
              </option>
              <option className="text-center" value="ซอยซูม">
                ซอยซูม
              </option>
              <option className="text-center" value="ซอย 4B">
                ซอย 4B
              </option>
              <option className="text-center" value="ซอยหมูแฮม">
                ซอยหมูแฮม
              </option>
              <option className="text-center" value="ซอย RS">
                ซอย RS
              </option>
              <option className="text-center" value="ซอยพรธิสาร">
                ซอยพรธิสาร
              </option>
              <option className="text-center" value="ซอย Icon">
                ซอย Icon
              </option>
              <option className="text-center" value="ซอยอีสเทิร์น">
                ซอยอีสเทิร์น
              </option>
            </Form.Select>
          </div>

          <div>
            <p
              className="link-reset mt-3 mt-md-3 mt-xl-2"
              onClick={handleReset}
            >
              <Link>
                <Button variant="outline-danger" className="mt-1 mt-xl-2">
                  <FaRedoAlt className="mb-1" /> ล้างค่าทั้งหมด
                </Button>
              </Link>
            </p>
          </div>
          {result.map((data, index) => (
            <Container key={data._id}>
              <Row>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  md={{ span: 8, offset: 2 }}
                  xl={{ span: 6, offset: 3 }}
                  xxl={{ span: 6, offset: 3 }}
                  className="mt-4 form"
                >
                  <Card className="card-restaurant">
                    <Link to={`/home/restaurant/${data._id}`} target="_blank">
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
                              src={data.coverImg}
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
                                  {data.name}
                                </span>
                              </div>
                              <p className="text-dark">
                                อาหารที่ขาย :{" "}
                                <span className="font-blue">{data.food}</span>
                              </p>
                              <p className="text-dark">
                                เวลาเปิด - ปิด :{" "}
                                <span className="font-blue">
                                  {" "}
                                  {data.timeOpen}-{data.timeClose} น.
                                </span>
                              </p>
                              <p className="text-dark">
                                วันหยุดของร้าน :{" "}
                                <span className="font-blue">
                                  {data.holiday.map((holiday, indexHoliday) =>
                                    data.holiday.length - 1 === indexHoliday ? (
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
                                  {data.ratePrice} บาท
                                </span>
                              </p>
                              <p className="font-blue">
                                <FaMapMarkerAlt className="text-danger" />{" "}
                                {data.alley}
                              </p>
                              <div className="box-tag">
                                <span>
                                  {data.tag.map((tag, indexTag) =>
                                    data.tag.length - 1 === indexTag ? (
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
          ))}
          <h1>all = {result.length}</h1>
        </div>
      );
    } else {
      return <div>NO DATA</div>;
    }
  }, [restaurants, input]);
  return <div>{restaurantList}</div>;
}

export default Content;
