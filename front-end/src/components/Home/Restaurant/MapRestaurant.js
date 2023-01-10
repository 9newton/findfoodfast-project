import React from "react";
import "./MapRestaurant.css";
import "reactjs-popup/dist/index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Iframe from 'react-iframe'

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
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96f16df85adb1%3A0xc11e50b2286fcbba!2z4Liq4LiZ4Liy4Lih4Lif4Li44LiV4Lia4Lit4LilIOC4leC4s-C4muC4pSDguJvguIfguKLguLLguIfguITguIEg4Lit4Liz4LmA4Lig4Lit4Lir4LmJ4Liy4LiH4LiJ4Lix4LiV4LijIOC4peC4s-C4m-C4suC4hyA1MjE5MA!5e0!3m2!1sth!2sth!4v1673364689308!5m2!1sth!2sth" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
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
