import React from "react";
import "./MapRestaurant.css";
import "reactjs-popup/dist/index.css";
import { Container, Row, Col } from "react-bootstrap";
import Iframe from 'react-iframe'

function ContentRestaurant({ restaurant }) {

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
                <h4 className="content-head">แผนที่</h4>

              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 12, offset: 0 }}
                xxl={{ span: 8, offset: 2 }}
                className="form mt-2"
              >
                <div className="map">
                  <Iframe src={restaurant?.location}></Iframe>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentRestaurant;
