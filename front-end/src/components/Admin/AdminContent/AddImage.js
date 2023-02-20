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
import noCoverImg from "../../../image/coverImg.png";
import noMenuImg from "../../../image/menuImg.png";

const AddImage = () => {
  const [name, setName] = useState("");
  const [alley, setAlley] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [showCoverImg, setShowCoverImg] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getRestaurantById();
  }, []);

  const getRestaurantById = async () => {
    const response = await axios.get(`/restaurants/${id}`);
    setCoverImg(response.data.coverImg);
    setImages(response.data.images);
    setName(response.data.name);
    setAlley(response.data.alley);
  };

  const uploadImageRestaurant = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("coverImg", coverImg);
      for (let i = 0; i < file.length; i++) {
        formData.append("images", file[i]);
      }
      await axios.post(`/restaurants/upload/${id}/${alley}`, formData);
      navigate("/admin/manageRestaurant");
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoverImgChange = (e) => {
    const file = e.target.files[0];
    setShowCoverImg(URL.createObjectURL(file));
    setCoverImg(e.target.files[0]);
  };

  return (
    <div className="content">
      <h1 className="content-head mb-4 mt-4 mt-md-5">{name}</h1>
      <Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 4 }}
            className="mt-md-4"
          >
            <Form onSubmit={uploadImageRestaurant}>
              <Card className="card-admin">
                <Card.Body>
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
                      {images == "" ? (
                        <Image
                          src={showCoverImg || noCoverImg}
                          alt="Image-Select"
                          className="add-image mb-2"
                        />
                      ) : (
                        <Image
                          src={coverImg}
                          alt="Image-Select"
                          className="add-image mb-2"
                        />
                      )}
                      <Form.Control
                        type="file"
                        className="file"
                        accept="image/jpeg"
                        onChange={handleCoverImgChange}
                        required
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      xl={{ span: 12, offset: 0 }}
                    >
                      <div className="text-start">
                        <Form.Label className="name h5 mt-4">
                          รูปเมนู
                        </Form.Label>
                      </div>
                      {images == "" ? (
                        <>
                          {file && Array.from(file).map((image, index) => (
                            <Image
                              src={URL.createObjectURL(image)}
                              key={index}
                              alt={`Image ${index}`}
                              className="add-image mb-2 mx-1"
                            />
                          )) || <Image src={noMenuImg} className="add-image mb-2" />}
                        </>
                      ) : (
                        <>
                          {images && images.map((imageUrl, index) => (
                            <Image
                              src={imageUrl}
                              key={index}
                              alt={`Image ${index}`}
                              className="add-image mb-2 mx-1"
                            />
                          )) || <Image src={noMenuImg} className="add-image mb-2" />}
                        </>
                      )}
                      <Form.Control
                        type="file"
                        className="file"
                        accept="image/jpeg"
                        name="images"
                        onChange={(e) => setFile(e.target.files)}
                        multiple
                        required
                      />

                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row className="mt-3">
                <button
                  className="col-12 mt-md-4 add-btn pointer"
                  type="submit"
                >
                  เพิ่มรูปภาพ
                </button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddImage;