import React from 'react';
import './ContentReport.css';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function ContentReport() {
  return (

    <div className="content-report">
      <h1 className='content-head mb-4 mt-4 mt-md-0'>แจ้งปัญหาอะไรดี?</h1>

      <div className='col-10 offset-1 col-xl-4 offset-xl-4 form'>
        <Form.Label className='name h5 mt-4' htmlFor="inputPassword5">เรื่อง</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          className='form-name'
          aria-describedby="passwordHelpBlock"
          placeholder='เรื่องที่ต้องการแจ้ง เช่น *ร้านปิดไปแล้ว, หมุดที่ร้านไม่ตรง อื่นๆ'
        />
      </div>
      <div className='col-10 offset-1 col-xl-4 offset-xl-4 form'>
        <Form.Label className='name h5 mt-4' htmlFor="inputPassword5">รายละเอียด</Form.Label>
        <Form.Control className='form-detail-report' as="textarea" placeholder='รายละเอียดที่ต้องการแจ้ง' rows={7} />
      </div>
      <div className='col-10 offset-1 col-xl-4 offset-xl-4 mt-4'>
        <Link to="#" className="send-btn">ส่ง</Link>
      </div>
    </div >
  )
}

export default ContentReport;