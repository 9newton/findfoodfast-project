import "./AddImage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const AddImage = () => {
  const [name, setName] = useState("");
  const [coverImg, setCoverImg] = useState("");
  // const [menuImg, setMenuImg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getRestaurantById();
  }, []);

  const getRestaurantById = async () => {
    const response = await axios.get(`http://localhost:5000/restaurants/${id}`);
    setCoverImg(response.data.coverImg);
    setName(response.data.name);
  };

  const uploadImageRestaurant = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("coverImg", coverImg);
      await axios.post(`http://localhost:5000/restaurants/upload/${id}`,
        formData
      );
      navigate("/admin/manageRestaurant");
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    setCoverImg(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="content">
      <h1 className="content-head mb-4 mt-4 mt-md-0">{name}</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 4 }}
            className="mt-md-4"
          >
            <Card className="card-admin">
              <Card.Body>
                <Form onSubmit={uploadImageRestaurant} >
                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 12, offset: 0 }}
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          รูปภาพปก
                        </Form.Label>
                      </div>
                      <Image
                        src={coverImg || "http://via.placeholder.com/300"}
                        alt="Image-Select"
                      />
                      <Form.Control
                        type="file"
                        className="file"
                        accept="image/*"
                        onChange={(e) => setCoverImg(e.target.files[0])}
                        required
                      />
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
                          รูปภาพเมนู
                        </Form.Label>
                      </div>
                      <Form.Control
                        type="file"
                        className="file"
                        // value={food}
                        // onChange={(e) => setFood(e.target.value)}
                        placeholder="อาหารที่ขาย"
                        required
                      />
                    </Col>
                  </Row> */}
                  <Row className="mt-3">
                    <button
                      className="col-12 mt-md-4 add-btn pointer"
                      type="submit"
                    >
                      เพิ่มรูปภาพ
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

export default AddImage;
