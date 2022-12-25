import React from 'react';
import './Search.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
    return (
       
<div className="search">
        <h1 className='search-head'>วันนี้กินอะไรดี?</h1>

        <div className='input'>
            <div className='col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3'>
        <InputGroup className="mb-3">
        <DropdownButton
          title="ทั้งหมด"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item className='text-center' href="#">อาหารตามสั่ง</Dropdown.Item>
          <Dropdown.Item className='text-center' href="#">ของทานเล่น</Dropdown.Item>
          <Dropdown.Item className='text-center' href="#">เครื่องดื่ม</Dropdown.Item>
        </DropdownButton>
        <Form.Control className='input-search'placeholder='ค้นหาชื่อร้านอาหาร หรือ ชื่ออาหาร' />
      </InputGroup>
      </div>
      </div>

      <div className='col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3'>
      <Form.Select className='select' aria-label="Default select example">
      <option className='text-center'>เลือกซอย</option>
      <option className='text-center' value="1">ซอยพร</option>
      <option className='text-center' value="2">ซอยมาลี</option>
      <option className='text-center' value="3">ซอยซูม</option>
    </Form.Select>
        </div>
      
    <div>
    <p className='link-reset'><a href='#' className="btn btn-link reset">ล้างค่าทั้งหมด</a></p>
    </div>
    

    </div>
    )
}

export default Search;