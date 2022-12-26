import React from 'react';
import './ContentHome.css';
import Img from '../../../image/test1.jpg';
import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';


function Content() {
    return (
       
<div className="content">
<Card className='card-show-food'>
<Card.Body className='card-body'>

<div className="row">
        <div className='col-12 col-md-6 l'>
        <img className='img-cover' src={Img} alt=""/>
        </div>
        <div className='col-12 col-md-6 py-3 py-md-0 r'>
        <span className='h3'>เครปไส้แตก </span>
        <Button
        className="mb-3 btn btn-link like">
        <FaHeart />
      </Button>
            <div className='py-3'>
                    <p>
                    อาหารที่ขาย : เครป
                    </p>
                    <p>
                    เวลาเปิด - ปิด : 17:00 - 22:00 น.
                    </p>
                    <p>
                    วันหยุดของร้าน : เปิดทุกวัน
                    </p>
                    <p>
                    เรทราคา : 40 - 100 บาท
                    </p>
                    <p>
                    <FaMapMarkerAlt className='text-danger'/> ซอยพรธิสาร
                    </p>
                    <span className="tag">ของทานเล่น</span>
                    <p className='link-menu'><a href='/home/restaurant' className="btn btn-link go-menu">ดูเมนูเพิ่มเติม</a></p>
            </div>
        </div>
    </div>
    
    </Card.Body>
    </Card>
    </div>
    )
}

export default Content;