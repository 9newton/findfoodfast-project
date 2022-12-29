import React from 'react';
import './ContentRandom.css';
import Form from 'react-bootstrap/Form';
import Img from '../../../image/random.png';

function ContentRandom() {
    return (
       
<div className="content-random">
        <h1 className='content-head mb-4 mt-4 mt-md-0'>ไม่รู้จะกินอะไรดี?</h1>

    <div className='col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3'>
      <Form.Select className='tag-btn' aria-label="Default select example">
      <option className='text-center'>เลือกหมวดหมู่</option>
      <option className='text-center' value="1">อาหารตามสั่ง</option>
      <option className='text-center' value="2">ของทานเล่น</option>
      <option className='text-center' value="3">เครื่องดื่ม</option>
    </Form.Select>
        </div>

        <div className='col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3 mt-1'>
        <a href="#" className="random-btn">สุ่มร้านอาหาร</a>
        </div>
        <img className='img-random' src={Img} alt=""/>
        <div>
            <p className='content-wording mt-5'>กด”ปุ่มสุ่มร้านอาหาร”เพื่อดูว่าวันนี้จะกินอะไรดี</p>
        </div>
        
    </div>
    )
}

export default ContentRandom;