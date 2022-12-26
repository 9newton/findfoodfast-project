import "./Popup.css";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Popup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("เลือกซอย");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="col-10 offset-1 col-md-6 offset-md-3 col-xl-2 offset-xl-5 mb-4 random-btn"
        onClick={() => setShow(true)}
      >
        <FaPlus className="mb-1" /> เพิ่มร้านอาหาร
      </div>

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
          <form onSubmit={saveUser}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="อาหารที่ขาย"
              />
            </div>

            <div className="col-12 col-xl-12">
              <Form.Label className="name h5 mt-4" htmlFor="inputPassword5">
                ซอย
              </Form.Label>
              <div className="control">
                <Form.Select
                  className="select-btn"
                  aria-label="Default select example"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option className="text-center" value="เลือกหมวดหมู่">เลือกซอย</option>
                  <option className="text-center" value="Male">
                    ซอยพร
                  </option>
                  <option className="text-center" value="Female">
                    ซอยมาลี
                  </option>
                </Form.Select>
              </div>
            </div>

            <div className="col-12 col-xl-12 mt-4 mb-2 add-con">
                <button type="submit" className="add-btn">
                  เพิ่มร้านอาหาร
                </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;
