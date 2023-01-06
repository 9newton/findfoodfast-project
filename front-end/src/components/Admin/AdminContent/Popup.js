import "./Popup.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Popup = () => {
  const [coverImg, setCoverImg] = useState("");
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [timeOpen, setTimeOpen] = useState("");
  const [timeClose, setTimeClose] = useState("");
  const [holiday, setHoliday] = useState([]);
  const [ratePrice, setRatePrice] = useState("");
  const [tel, setTel] = useState("");
  const [line, setLine] = useState("");
  const [facebook, setFacebook] = useState("");
  const [delivery, setDelivery] = useState([]);
  const [tag, setTag] = useState([]);
  const [alley, setAlley] = useState("");
  const [location, setLocation] = useState("");
  // const [menuImg, setMenuImg] = useState("");
  const navigate = useNavigate();

  const checkboxHoliday = async (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setHoliday((prev) => [...prev, e.target.value]);
    } else {
      const newData = holiday.filter((d) => !d.includes(e.target.value));
      setHoliday(newData);
    }
  };

  const checkboxDelivery = async (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setDelivery((prev) => [...prev, e.target.value]);
    } else {
      const newData = delivery.filter((d) => !d.includes(e.target.value));
      setDelivery(newData);
    }
  };

  const checkboxTag = async (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setTag((prev) => [...prev, e.target.value]);
    } else {
      const newData = tag.filter((d) => !d.includes(e.target.value));
      setTag(newData);
    }
  };

  const saveRestaurant = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/restaurants", {
        coverImg,
        name,
        food,
        timeOpen,
        timeClose,
        holiday,
        ratePrice,
        tel,
        line,
        facebook,
        delivery,
        tag,
        alley,
        location,
      });
      navigate("/admin/manageRestaurant");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content">
      <h1 className="content-head mb-4 mt-4 mt-md-0">เพิ่มร้านอาหารเลย!</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 3 }}
            xl={{ span: 10, offset: 1 }}
            className="mt-md-4"
          >
            <Card className="card-admin">
              <Card.Body>
                <Form onSubmit={saveRestaurant}>
                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 6, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          ชื่อร้านอาหาร
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="ชื่อร้านอาหาร"
                      />
                    </Col>

                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 6, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          อาหารที่ขาย
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        className="form-input"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                        placeholder="อาหารที่ขาย"
                        required
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 3, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          เวลาเปิด
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="time"
                        className="form-input"
                        value={timeOpen}
                        onChange={(e) => setTimeOpen(e.target.value)}
                      />
                    </Col>

                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 3, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          เวลาปิด
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="time"
                        className="form-input"
                        value={timeClose}
                        onChange={(e) => setTimeClose(e.target.value)}
                      />
                    </Col>

                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 6, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Label className="name h5 mt-4">
                              วันหยุด
                            </Form.Label>
                            <div className="mt-2">
                              <Form.Check
                                inline
                                label="จ."
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="วันจันทร์"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                              <Form.Check
                                inline
                                label="อ."
                                name="group2"
                                type={type}
                                id={`inline-${type}-2`}
                                value="วันอังคาร"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                              <Form.Check
                                inline
                                label="พ."
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="วันพุธ"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                              <Form.Check
                                inline
                                label="พฤ."
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="วันพฤหัสบดี"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                              <Form.Check
                                inline
                                label="ศ."
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="วันศุกร์"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                              <Form.Check
                                inline
                                label="ส."
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="วันเสาร์"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                              <Form.Check
                                inline
                                label="อา."
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="วันอาทิตย์"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                              <Form.Check
                                inline
                                label="ไม่มี"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="ไม่มีวันหยุดที่แน่นอน"
                                onChange={(e) => checkboxHoliday(e)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 4, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          เรทราคา
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        className="form-input"
                        value={ratePrice}
                        onChange={(e) => setRatePrice(e.target.value)}
                        placeholder="เรทราคา (Ex. 60-100)"
                      />
                    </Col>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 4, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">ซอย</Form.Label>
                      </div>
                      <Form.Select
                        className="select-btn"
                        aria-label="Default select example"
                        value={alley}
                        onChange={(e) => setAlley(e.target.value)}
                        required
                      >
                        <option className="text-center">เลือกซอย</option>
                        <option className='text-center' value="ซอยสะพานชมพู">ซอยสะพานชมพู</option>
              <option className='text-center' value="ซอยมาลี">ซอยมาลี</option>
              <option className='text-center' value="ซอยซูม">ซอยซูม</option>
              <option className='text-center' value="ซอย 4B">ซอย 4B</option>
              <option className='text-center' value="ซอยหมูแฮม">ซอยหมูแฮม</option>
              <option className='text-center' value="ซอย RS">ซอย RS</option>
              <option className='text-center' value="ซอยพรธิสาร">ซอยพรธิสาร</option>
              <option className='text-center' value="ซอย Icon">ซอย Icon</option>
              <option className='text-center' value="ซอยอีสเทิร์น">ซอยอีสเทิร์น</option>
                      </Form.Select>
                    </Col>

                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 4, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          Location
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        className="form-input"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 4, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          เบอร์โทรศัพท์
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        className="form-input"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder="เบอร์โทรศัพท์"
                      />
                    </Col>

                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 4, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">Line</Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        className="form-input"
                        value={line}
                        onChange={(e) => setLine(e.target.value)}
                        placeholder="Line"
                      />
                    </Col>

                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 4, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          Facebook
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="text"
                        className="form-input"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                        placeholder="Facebook"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 12, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Label className="name h5 mt-4">
                              บริการส่ง
                            </Form.Label>
                            <div className="mt-2">
                              <Form.Check
                                inline
                                label="LINEMAN"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="LINEMAN"
                                onChange={(e) => checkboxDelivery(e)}
                              />
                              <Form.Check
                                inline
                                label="GRAB"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="GRAB"
                                onChange={(e) => checkboxDelivery(e)}
                              />
                              <Form.Check
                                inline
                                label="Robinhood"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="Robinhood"
                                onChange={(e) => checkboxDelivery(e)}
                              />
                              <Form.Check
                                inline
                                label="Shopee"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="Shopee"
                                onChange={(e) => checkboxDelivery(e)}
                              />
                              <Form.Check
                                inline
                                label="Foodpanda"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="Foodpanda"
                                onChange={(e) => checkboxDelivery(e)}
                              />
                              <Form.Check
                                inline
                                label="ร้านส่งเอง"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="ร้านส่งเอง"
                                onChange={(e) => checkboxDelivery(e)}
                              />
                              <Form.Check
                                inline
                                label="ไม่มีส่ง"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="ไม่มีส่ง"
                                onChange={(e) => checkboxDelivery(e)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 12, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Label className="name h5 mt-4">
                              หมวดหมู่
                            </Form.Label>
                            <div className="mt-2">
                              <Form.Check
                                inline
                                label="อาหารจานเดียว"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="อาหารจานเดียว"
                                onChange={(e) => checkboxTag(e)}
                              />
                              <Form.Check
                                inline
                                label="ก๋วยเตี๋ยว"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="ก๋วยเตี๋ยว"
                                onChange={(e) => checkboxTag(e)}
                              />
                              <Form.Check
                                inline
                                label="สเต็ก"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="สเต็ก"
                                onChange={(e) => checkboxTag(e)}
                              />
                              <Form.Check
                                inline
                                label="หมูกะทะ"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="หมูกะทะ"
                                onChange={(e) => checkboxTag(e)}
                              />
                              <Form.Check
                                inline
                                label="ชาบู"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="ชาบู"
                                onChange={(e) => checkboxTag(e)}
                              />
                              <Form.Check
                                inline
                                label="ของทานเล่น"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="ของทานเล่น"
                                onChange={(e) => checkboxTag(e)}
                              />
                              <Form.Check
                                inline
                                label="ของหวาน"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="ของหวาน"
                                onChange={(e) => checkboxTag(e)}
                              />
                              <Form.Check
                                inline
                                label="เครื่องดื่ม"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="เครื่องดื่ม"
                                onChange={(e) => checkboxTag(e)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>

                  {/* <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 12, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          รูปปก
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="file"
                        className="img-upload"
                        value={coverImg}
                        onChange={(e) => setCoverImg(e.target.value)}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 12, offset: 0 }}
                      className=""
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          รูปเมนู
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="file"
                        className="img-upload"
                        value={menuImg}
                        onChange={(e) => setMenuImg(e.target.value)}
                      />
                    </Col>
                  </Row> */}

                  <Row className="mt-3">
                    <button
                      className="col-12 mt-md-4 add-btn pointer"
                      type="submit"
                    >
                      เพิ่มร้านอาหาร
                    </button>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Popup;
