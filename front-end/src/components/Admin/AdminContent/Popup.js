import "./Popup.css";
import Modal from "react-bootstrap/Modal";
import React, { useState } from 'react';
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Popup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [timeOpen, setTimeOpen] = useState("");
  const [timeClose, setTimeClose] = useState("");
  const [holiday, setHoliday] = useState([]);
  // const [ratePrice, setRatePrice] = useState("");
  // const [contact, setContact] = useState("");
  // const [delivery, setDelivery] = useState("");
  // const [tag, setTag] = useState("เลือกTag");
  // const [alley, setAlley] = useState("เลือกซอย");
  // const [location, setLocation] = useState("");
  // const [coverImg, setCoverImg] = useState("");
  // const [menuImg, setMenuImg] = useState("");
  const navigate = useNavigate();

  const checkboxHoliday = async (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setHoliday([...holiday, e.target.value])
    }
    console.log({holiday});
  }

  const saveRestaurant = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/restaurants", {
        name,
        food,
        timeOpen,
        timeClose,
        holiday,
        // ratePrice,
        // contact,
        // delivery,
        // tag,
        // alley,
        // location,
      });
      navigate(setShow(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 4, offset: 8 }}
            xl={{ span: 2, offset: 10 }}
            className="mt-md-4 add-btn pointer"
            onClick={() => setShow(true)}
          >
            <FaPlus className="mb-1" /> เพิ่มร้านอาหาร
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h4 className="popup-head">เพิ่มร้านอาหารเลย!</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={saveRestaurant}>
            <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                ชื่อร้านอาหาร
              </Form.Label>
              <Form.Control
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ชื่อร้านอาหาร"
              />
            </div>

            <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                อาหารที่ขาย
              </Form.Label>
              <Form.Control
                type="text"
                className="form-input"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                placeholder="อาหารที่ขาย"
              />
            </div>

            <div className="row">
              <div className="col-12 col-md-6 col-xl-6">
                <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                  เวลาเปิด
                </Form.Label>
                <div className="control">
                  <Form.Select
                    className="select-btn"
                    aria-label="Default select example"
                    value={timeOpen}
                    onChange={(e) => setTimeOpen(e.target.value)}
                  >
                    <option className="text-center" value="เลือกหมวดหมู่">
                      เลือกเวลาเปิด
                    </option>
                    <option className="text-center" value="11.00">
                      11.00
                    </option>
                    <option className="text-center" value="12.00">
                      12.00
                    </option>
                  </Form.Select>
                </div>
              </div>

              <div className="col-12 col-md-6 col-xl-6">
                <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                  เวลาปิด
                </Form.Label>
                <div className="control">
                  <Form.Select
                    className="select-btn"
                    aria-label="Default select example"
                    value={timeClose}
                    onChange={(e) => setTimeClose(e.target.value)}
                  >
                    <option className="text-center" value="เลือกหมวดหมู่">
                      เลือกเวลาปิด
                    </option>
                    <option className="text-center" value="11.00">
                      11.00
                    </option>
                    <option className="text-center" value="12.00">
                      12.00
                    </option>
                  </Form.Select>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-12">
              <Form value={holiday} onChange={(e) => setHoliday(e.target.value)}>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Label
                      className="name h5 mt-4"
                      htmlFor="inputPassword5"

                    >
                      วันหยุด
                    </Form.Label>
                    <div className="mt-2">
                      <Form.Check
                        inline
                        label="จ."
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        // value={holiday}
                        value="วันจันทร์"
                      onChange={(e) => checkboxHoliday(e)}
                      />
                      <Form.Check
                        inline
                        label="อ."
                        name="group2"
                        type={type}
                        id={`inline-${type}-2`}
                        // value={holiday}
                        value="วันอังคาร"
                      onChange={(e) => checkboxHoliday(e)}
                      />
                      {/* <Form.Check
                        inline
                        label="พ."
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        value="วันพุธ"
                        onChange={(e) => setHoliday(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label="พฤ."
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        value="วันพฤหัสบดี"
                        onChange={(e) => setHoliday(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label="ศ."
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        value="วันศุกร์"
                        onChange={(e) => setHoliday(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label="ส."
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        value="วันเสาร์"
                        onChange={(e) => setHoliday(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label="อา."
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        value="วันอาทิตย์"
                        onChange={(e) => setHoliday(e.target.value)}
                      />
                      <Form.Check
                        inline
                        label="ไม่มี"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        value="ไม่มีวันหยุดที่แน่นอน"
                        onChange={(e) => setHoliday(e.target.value)}
                      /> */}
                    </div>
                  </div>
                ))}
              </Form>
            </div>


            {/* <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-2" htmlFor="inputPassword5">
                เรทราคา
              </Form.Label>
              <Form.Control
                type="text"
                className="form-input"
                value={ratePrice}
                onChange={(e) => setRatePrice(e.target.value)}
                placeholder="เรทราคา"
              />
            </div>

            <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                ช่องทางการติดต่อ
              </Form.Label>
              <Form.Control
                type="text"
                className="form-input"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="เบอร์โทรศัพท์"
              />
            </div>

            <div className="col-12 col-xl-12 mt-3">
              <Form.Control
                type="text"
                className="form-input"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Line"
              />
            </div>

            <div className="col-12 col-xl-12 mt-3">
              <Form.Control
                type="text"
                className="form-input"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Facebook"
              />
            </div>

            <div className="col-12 col-xl-12">
            <Form>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Label
                      className="name h5 mt-4"
                      htmlFor="inputPassword5"
                    >
                      บริการส่ง
                    </Form.Label>
                    <div className="mt-2">
                    <Form.Check
                      inline
                      label="LINEMAN"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="GRAB"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="Robinhood"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="Shopee"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="Foodpanda"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="ร้านส่งเอง"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="ไม่มีส่ง"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={delivery}
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                  </div>
                  </div>
                ))}
              </Form>
            </div>

            <div className="col-12 col-xl-12">
            <Form>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Label
                      className="name h5 mt-4"
                      htmlFor="inputPassword5"
                    >
                      หมวดหมู่
                    </Form.Label>
                    <div className="mt-2">
                    <Form.Check
                      inline
                      label="อาหารจานเดียว"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="ก๋วยเตี๋ยว"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="สเต็ก"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="หมูกะทะ"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="ชาบู"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="ของทานเล่น"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="ของหวาน"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="เครื่องดื่ม"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                  </div>
                  </div>
                ))}
              </Form>
            </div>

              <div className="col-12 col-md-12 col-xl-12">
                <Form.Label className="name h5 mt-2" htmlFor="inputPassword5">
                  ซอย
                </Form.Label>
                <div className="control">
                  <Form.Select
                    className="select-btn"
                    aria-label="Default select example"
                    value={alley}
                    onChange={(e) => setAlley(e.target.value)}
                  >
                    <option className="text-center" value="เลือกหมวดหมู่">
                      เลือกซอย
                    </option>
                    <option className="text-center" value="ซอยพร">
                      ซอยพร
                    </option>
                    <option className="text-center" value="ซอยมาลี">
                      ซอยมาลี
                    </option>
                  </Form.Select>
                </div>
              </div>

            <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                Location
              </Form.Label>
              <Form.Control
                type="text"
                className="form-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div> */}

            {/* <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                Cover Image
              </Form.Label>
              <Form.Control
                type="file"
                className="img-upload"
                value={coverImg}
                onChange={(e) => setCoverImg(e.target.value)}
              />
            </div>

            <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                Menu Image
              </Form.Label>
              <Form.Control
                type="file"
                className="img-upload"
                value={menuImg}
                onChange={(e) => setMenuImg(e.target.value)}
              />
            </div> */}

            <Container>
              <Row>
                <button
                  xs={{ span: 12, offset: 0 }}
                  md={{ span: 12, offset: 0 }}
                  xl={{ span: 12, offset: 0 }}
                  onClick={() => setShow(true)}
                  className="mt-md-4 add-btn pointer"
                  type="submit"
                >
                  เพิ่มร้านอาหาร
                </button>
              </Row>
            </Container>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup; 