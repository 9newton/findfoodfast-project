import React, { useMemo } from "react";
import "./MenuImg.css";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgCover from "../../../image/test1.jpg";
import ImageGallery from 'react-image-gallery';

function ContentRestaurant({ restaurant }) {

  const images = useMemo(() => {
    if (restaurant) {
      return restaurant.images.map(data => ({
        original: data,
        thumbnail: data
      }))
    } else {
      return []
    }
  }, [restaurant])

  return (
    <div className="menu-restaurant">

      <Container className="mb-5">
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 8, offset: 2 }}
            xl={{ span: 8, offset: 2 }}
            xxl={{ span: 12, offset: 0 }}
            className="form"
          >
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
                xxl={{ span: 4, offset: 2 }}
                className="form"
              >
                <h4 className="content-head">เมนู</h4>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 12, offset: 0 }}
                xxl={{ span: 8, offset: 2 }}
                className="form"
              >
                <ImageGallery items={images} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentRestaurant;
