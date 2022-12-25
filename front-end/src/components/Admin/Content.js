import React from 'react';
import './Content.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Modal = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

function Content() {
    return (
       
<div className="content">
        <h1 className='content-head mb-4 mt-4 mt-md-0'>แอดมิน</h1>

    <div className='col-10 offset-1 col-md-6 offset-md-3 col-xl-2 offset-xl-5 mb-4 form'>
      <Form.Control
        type="text"
        id="inputPassword5"
        className='form-name'
        aria-describedby="passwordHelpBlock"
        placeholder='Search'
      />
        </div>
       
        <div className='col-10 offset-1 col-xl-10 form'>
        <Card className='card-body'>
        <Card.Body>

        <div className='select'>
        <Form.Select className='tag-btn' aria-label="Default select example">
      <option className='text-center'>เลือกซอย</option>
      <option className='text-center' value="1">อาหารตามสั่ง</option>
      <option className='text-center' value="2">ของทานเล่น</option>
      <option className='text-center' value="3">เครื่องดื่ม</option>
        </Form.Select>
        </div>
       
        <Table responsive="sm text-center">
        <thead>
          <tr>
            <th>EDIT</th>
            <th>ID</th>
            <th>ชื่อร้าน</th>
            <th>อาหารที่ขาย</th>
            <th>เวลาเปิด-ปิด</th>
            <th>วันหยุด</th>
            <th>เรทราคา</th>
            <th>ช่องทางติดต่อ</th>
            <th>บริการส่ง</th>
            <th>TAG</th>
            <th>ซอย</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      </Card.Body>
      </Card>

      <div className='col-10 offset-1 col-md-6 offset-md-3 col-xl-2 offset-xl-5 mb-4'>
        <a href="#" className="random-btn">{Modal}เพิ่มร้านอาหาร</a>
        </div>
        
      </div>
      
    </div>
    
    )
    
}

export default Content;

