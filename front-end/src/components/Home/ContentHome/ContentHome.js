import React from 'react';
import './ContentHome.css';
import Img from '../../../image/test1.jpg';
import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


function Content() {
    return (
       
<div className="content-home">

<Container>
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 8, offset: 2 }}
            xl={{ span: 6, offset: 3 }}
            xxl={{ span: 6, offset: 3 }}
            className="mt-4 form"
          >
            <Card className="card-restaurant">
            <a href='/home/restaurant'>
              <Card.Body className="card-show-food">
                <Row>
                  <Col
                    xs={{ span: 6, offset: 0 }}
                    md={{ span: 5, offset: 0 }}
                    xl={{ span: 5, offset: 0 }}
                    xxl={{ span: 5, offset: 0 }}
                    className="show-img"
                  >
                    <img className="img-cover-show" src={Img} alt="" />
                  </Col>

                  <Col
                    xs={{ span: 6, offset: 0 }}
                    md={{ span: 7, offset: 0 }}
                    xl={{ span: 7, offset: 0 }}
                    xxl={{ span: 7, offset: 0 }}
                    className="show-detail"
                  >
                    <div className='detail-right'>
                    <div className='mb-3 name-right'>
                    <span className='h2 font-blue'>เครปไส้แตก</span>
                    </div>
                    <p className='text-dark'>
                    อาหารที่ขาย : <span className='font-blue'>เครป</span>
                    </p>
                    <p className='text-dark'>
                    เวลาเปิด - ปิด : <span className='font-blue'>17:00 - 22:00 น.</span>
                    </p>
                    <p className='text-dark'>
                    วันหยุดของร้าน : <span className='font-blue'>เปิดทุกวัน</span>
                    </p>
                    <p className='text-dark'>
                    เรทราคา : <span className='font-blue'>40 - 100 บาท</span>
                    </p>
                    <p className='font-blue'>
                    <FaMapMarkerAlt className='text-danger'/> ซอยพรธิสาร
                    </p>
                    <div className='box-tag'>
                    <span className="tag">ของทานเล่น</span>
                    </div>
                    <p className='link-menu mt-0 mb-0 mt-md-4'><a href='/home/restaurant' className="btn btn-link go-menu">ดูเมนูเพิ่มเติม</a></p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>

{/* <Card className='card-show-food'>
<a href='/home/restaurant'>
    <Card.Body className='card-body-show'>

<div className="row">
        <div className='col-12 col-md-6 l'>
        <img className='img-cover-show' src={Img} alt=""/>
        </div>
        <div className='col-12 col-md-6 py-3 py-md-0 r'>
        <span className='h3'>เครปไส้แตก </span>
        <Button
        className="mb-3 btn btn-link like">
        <FaHeart />
      </Button>
            <div className='py-0'>
                    <p className='text-dark'>
                    อาหารที่ขาย : <span className='font-blue'>เครป</span>
                    </p>
                    <p className='text-dark'>
                    เวลาเปิด - ปิด : <span className='font-blue'>17:00 - 22:00 น.</span>
                    </p>
                    <p className='text-dark'>
                    วันหยุดของร้าน : <span className='font-blue'>เปิดทุกวัน</span>
                    </p>
                    <p className='text-dark'>
                    เรทราคา : <span className='font-blue'>40 - 100 บาท</span>
                    </p>
                    <p className='font-blue'>
                    <FaMapMarkerAlt className='text-danger'/> ซอยพรธิสาร
                    </p>
                    <span className="tag mx-1">ของทานเล่น</span><span className="tag">เครื่องดื่ม</span>
                    <p className='link-menu mt-0 mb-0 mt-md-4'><a href='/home/restaurant' className="btn btn-link go-menu">ดูเมนูเพิ่มเติม</a></p>
            </div>
        </div>
    </div>
    
    </Card.Body>
    </a>
    </Card> */}
    
    </div>
    )
}

export default Content;