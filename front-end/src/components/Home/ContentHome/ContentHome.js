import React, { useEffect, useState } from "react";
import "./ContentHome.css";
import "./Search.css";
import {
  Form,
  InputGroup,
  Card,
  Container,
  Row,
  Col,
  Button,
  Image,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaRedoAlt } from "react-icons/fa";
import Pagination from "react-bootstrap/Pagination";
import { getApiUrl } from "../../../api.js";
import axios from "axios";

function Content() {
  // Get Data
  const [restaurants, setRestaurant] = useState([]);
  // Filter And Search
  const [searchInput, setSearchInput] = useState("");
  const [tag, setTag] = useState("");
  const [alley, setAlley] = useState("");
  // Pagination
  const [pageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const [showPagination, setShowPagination] = React.useState(true);

  useEffect(() => {
    getRestaurants();
  }, [pageNumber, searchInput, tag, alley, pageSize]);

  // Pagination
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  const getRestaurants = async () => {
    axios
      .get(
        `/restaurants?page=${pageNumber}&search=${searchInput}&tag=${tag}&alley=${alley}&pageSize=${pageSize}`
      )
      .then((response) => response.data)
      .then(({ totalPages, data }) => {
        setRestaurant(data);
        setNumberOfPages(totalPages);
        if (totalPages > 5) {
          setShowPagination(false);
        } else {
          setShowPagination(true);
        }
      });
  };

  // others
  const resetPageNumber = () => {
    setPageNumber(0);
  };
  const resetInput = () => {
    setTag("");
    setAlley("");
    setSearchInput("");
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <div id="search" className="content-home">
      <div className="input">
        <h1 className="search-head mt-5 mt-xl-5 mb-1 mb-xl-5">
          วันนี้กินอะไรดี?
        </h1>
        <Container>
          <Row>
            <Col
              xs={{ span: 12, offset: 0 }}
              md={{ span: 10, offset: 1 }}
              xl={{ span: 8, offset: 2 }}
              xxl={{ span: 8, offset: 2 }}
              className="mt-4 form"
            >
              <Form.Control
                className="input-search text-center"
                placeholder="ค้นหาชื่อร้านอาหาร หรือ อาหารต้องการ"
                name="searchInput"
                value={searchInput}
                onChange={(e) =>
                  setSearchInput(e.target.value) & resetPageNumber()
                }
              />
            </Col>
          </Row>

          <Row>
            <Col
              xs={{ span: 6, offset: 0 }}
              md={{ span: 5, offset: 1 }}
              xl={{ span: 4, offset: 2 }}
              xxl={{ span: 4, offset: 2 }}
              className="mt-4 form-search-1"
            >
              <Form.Select
                className="select-tag text-center"
                aria-label="Select Alley"
                value={tag}
                onChange={(e) => setTag(e.target.value) & resetPageNumber()}
              >
                <option option value="">
                  หมวดหมู่ทั้งหมด
                </option>
                <option option value="อาหารจานเดียว">
                  อาหารจานเดียว
                </option>
                <option value="ก๋วยเตี๋ยว">ก๋วยเตี๋ยว</option>
                <option value="สเต็ก">สเต็ก</option>
                <option value="หมูกะทะ">หมูกะทะ</option>
                <option value="ชาบู">ชาบู</option>
                <option value="ของทานเล่น">ของทานเล่น</option>
                <option value="ของหวาน">ของหวาน</option>
                <option value="เครื่องดื่ม">เครื่องดื่ม</option>
                <option value="ผลไม้">ผลไม้</option>
              </Form.Select>
            </Col>
            <Col
              xs={{ span: 6, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              xl={{ span: 4, offset: 0 }}
              xxl={{ span: 4, offset: 0 }}
              className="mt-4 form-search-2"
            >
              <Form.Select
                className="select"
                aria-label="Select Alley"
                value={alley}
                onChange={(e) => setAlley(e.target.value) & resetPageNumber()}
              >
                <option className="text-center" value="">
                  ซอยทั้งหมด
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
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <p className="link-reset mt-3 mt-md-3 mt-xl-2">
          <Link onClick={(e) => resetInput()}>
            <Button variant="outline-danger" className="mt-1 mt-xl-2">
              <FaRedoAlt className="mb-1" /> ล้างค่าทั้งหมด
            </Button>
          </Link>
        </p>
      </div>
      {restaurants.map((data, index) => (
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
                <Link
                  to={`/home/restaurant/${data._id}`}
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
                            <span className="h2 font-blue">{data.name}</span>
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
                                  <span key={indexTag + "tag"} className="tag">
                                    {tag}
                                  </span>
                                )
                              )}
                            </span>
                          </div>
                          <p className="link-menu mt-0 mb-0 mt-md-4">
                            <Button variant="link" className="font-blue">
                              ดูเมนูเพิ่มเติม
                            </Button>
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
      <div className="page-of mt-5">
        {showPagination ? (
          <Pagination>
            <Pagination.Prev onClick={gotoPrevious} />
            {pages.map((pageIndex) => (
              <Pagination.Item
                key={pageIndex}
                onClick={() => setPageNumber(pageIndex)}
                active={pageNumber === pageIndex}
              >
                {pageIndex + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={gotoNext} />
          </Pagination>
        ) : null}
        {!showPagination ? (
          <Pagination>
            <Pagination.Prev onClick={() => gotoPrevious() & scrollUp()} />
            <Pagination.Item
              key={0}
              onClick={() => setPageNumber(0) & scrollUp()}
              active={pageNumber === 0}
            >
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis
              key={pages.length / 2}
              onClick={() => setPageNumber(pages.length / 2) & scrollUp()}
              active={pageNumber === pages.length / 2}
            />
            <Pagination.Item
              key={pages.length}
              onClick={() => setPageNumber(pages.length - 1) & scrollUp()}
              active={pageNumber === pages.length - 1}
            >
              {pages.length}
            </Pagination.Item>
            <Pagination.Next onClick={() => gotoNext() & scrollUp()} />
          </Pagination>
        ) : null}
        Page : {pageNumber + 1} of {pages.length}
      </div>
    </div>
  );
}
export default Content;
