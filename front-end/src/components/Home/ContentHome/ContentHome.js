import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./ContentHome.css";
import "./Search.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaRedoAlt } from 'react-icons/fa';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

function Content() {
  // Get Data
  const [restaurants, setRestaurant] = useState([]);
  // Filter And Search
  const [searchInput, setSearchInput] = useState('');
  const [tag, setTag] = useState('');
  const [alley, setAlley] = useState('');
  // Pagination
  const [pageSize, setPageSize] = useState(5);
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
    fetch(`http://localhost:5000/restaurants?page=${pageNumber}&search=${searchInput}&tag=${tag}&alley=${alley}&pageSize=${pageSize}`
    )
      .then((response) => response.json())
      .then(({ totalPages, data }) => {
        setRestaurant(data);
        setNumberOfPages(totalPages);
        console.log(totalPages);
        if (totalPages > 5) {
          setShowPagination(false);
        } else { setShowPagination(true); }
      });
  };

  // others
  const resetPageNumber = () => {
    setPageNumber(0);
  };
  const resetInput = () => {
    setTag('');
    setAlley('');
    setSearchInput('');
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 680,
      behavior: "smooth",
    });
  };

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
              name="tag"
              value={tag}
              onChange={(e) =>
                setTag(e.target.value) & resetPageNumber()
              }
            >
              <option value="">ทั้งหมด</option>
              <option option value="อาหารจานเดียว">อาหารจานเดียว</option>
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
              name="searchInput"
              value={searchInput}
              onChange={(e) =>
                setSearchInput(e.target.value) & resetPageNumber()
              }
            />
          </InputGroup>
        </div>
      </div >

      <div className="col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
        <Form.Select
          className="select"
          aria-label="Select Alley"
          name="alley"
          value={alley}
          onChange={(e) =>
            setAlley(e.target.value) & resetPageNumber()
          }
        >
          <option className="text-center" selected hidden>
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
        >
          <Link onClick={(e) => resetInput()}>
            <Button variant="outline-danger" className="mt-1 mt-xl-2">
              <FaRedoAlt className="mb-1" /> ล้างค่าทั้งหมด
            </Button>
          </Link>
        </p>
      </div>
      {
        restaurants.map((data, index) => (
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
        ))
      }
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
            <Pagination.Prev onClick={() =>
              gotoPrevious() & scrollUp()
            } />
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
    </div >
  );
}
export default Content;