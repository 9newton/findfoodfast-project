import React from "react";
import "./MapRestaurant.css";
import Card from "react-bootstrap/Card";
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
                xxl={{ span: 4, offset: 3 }}
                className="form"
              >
                <h4 className="content-head">แผนที่</h4>
                
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
                xxl={{ span: 6, offset: 3 }}
                className="form"
              >
                <div className="map">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342.1060931797765!2d100.73489017289877!3d14.048299823468835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d83e49a363707%3A0x957376618d39e37d!2sSUPER%20SURFFER!5e0!3m2!1sth!2sth!4v1672175447638!5m2!1sth!2sth" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
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
