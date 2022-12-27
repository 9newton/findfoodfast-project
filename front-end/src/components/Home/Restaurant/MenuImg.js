import React from "react";
import "./MenuImg.css";
import Card from "react-bootstrap/Card";
import "reactjs-popup/dist/index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgCover from "../../../image/test1.jpg";
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://cdn.discordapp.com/attachments/610914716113567755/1057390912130519070/S__31973489.jpg',
      thumbnail: 'https://cdn.discordapp.com/attachments/610914716113567755/1057390912130519070/S__31973489.jpg',
    },
    {
      original: 'https://cdn.discordapp.com/attachments/610914716113567755/1057390911908225074/S__31973488.jpg',
      thumbnail: 'https://cdn.discordapp.com/attachments/610914716113567755/1057390911908225074/S__31973488.jpg',
    },
    {
      original: 'https://cdn.discordapp.com/attachments/610914716113567755/1057390911652376656/S__31973487.jpg',
      thumbnail: 'https://cdn.discordapp.com/attachments/610914716113567755/1057390911652376656/S__31973487.jpg',
    },
  ];

function ContentRestaurant() {
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
                xxl={{ span: 4, offset: 3 }}
                className="form"
              >
                <h4 className="content-head">เมนู</h4>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 12, offset:0 }}
                xxl={{ span: 6, offset: 3 }}
                className="form"
              >
            <ImageGallery items={images} />
            </Col>
            </Row>
            {/* <Row>
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset:0 }}
                xxl={{ span: 2, offset: 3 }}
                className="form"
              >
                <img className="img-menu" src={ImgCover} alt="" />
              </Col>
              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                xxl={{ span: 2, offset: 0 }}
                className="form"
              >
                <img className="img-menu" src={ImgCover} alt="" />
              </Col>

              <Col
                xs={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                xxl={{ span: 2, offset: 0 }}
                className="form"
              >
                <img className="img-menu" src={ImgCover} alt="" />
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentRestaurant;
