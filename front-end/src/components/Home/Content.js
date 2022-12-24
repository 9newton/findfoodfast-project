import React from 'react';
import './Content.css';
import Img from '../../image/test1.jpg';
import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

function Content() {
    return (
       
<div className="content">
<Card>
<Card.Body className='card-body'>

<div className="row">
        <div className='col-12 col-md-6 l'>
        <img className='img' src={Img} alt=""/>
        </div>
        <div className='col-12 col-md-6 py-3 py-md-0 r'>
        <h2>เครปไส้แตก</h2>
            <div className='py-4'>
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
            </div>
        </div>
    </div>
    
    </Card.Body>
    </Card>
    </div>
    )
}

export default Content;