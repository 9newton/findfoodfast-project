// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import './Search.css';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Card from 'react-bootstrap/Card';
// import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
// import axios from "axios";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// function Search() {
//   const [restaurants, setRestaurant] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSearch= useCallback( (e) => {
//     console.log(e.target.value);
//     setInput(e.target.value);
//   }, []);

//   const fetchrestaurants = useCallback(async () => {
//     const response = await axios.get("http://localhost:5000/restaurants");
//     setRestaurant(response.data);
//   }, []);

//   useEffect(() => {
//     getRestaurants();
//     fetchrestaurants();
//   }, []);

//   const getRestaurants = async () => {
//     const response = await axios.get("http://localhost:5000/restaurants");
//     setRestaurant(response.data);
//   };

//   const restaurantList = useMemo(() => {
//     if (restaurants !== null) {
//       const result = restaurants.filter((data) =>{
//         console.log(input);
//         return data.name.includes(input) || data.food.includes(input)
//       })
//     return (
       
// <div className="content-home">
// <h1 className='search-head'>วันนี้กินอะไรดี?</h1>

//         <div className='input'>
//             <div className='col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3'>
//         <InputGroup className="mb-3">
//         <DropdownButton
//           title="ทั้งหมด"
//           id="input-group-dropdown-1"
//         >
//           <Dropdown.Item className='text-center' href="#">อาหารตามสั่ง</Dropdown.Item>
//           <Dropdown.Item className='text-center' href="#">ของทานเล่น</Dropdown.Item>
//           <Dropdown.Item className='text-center' href="#">เครื่องดื่ม</Dropdown.Item>
//         </DropdownButton>
//         <Form.Control className='input-search'placeholder='ค้นหาชื่อร้านอาหาร หรือ ชื่ออาหาร' onChange={e => handleSearch(e)}/>
//       </InputGroup>
//       </div>
//       </div>

//       <div className='col-10 offset-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3'>
//       <Form.Select className='select' aria-label="Default select example">
//       <option className='text-center'>เลือกซอย</option>
//       <option className='text-center' value="1">ซอยพร</option>
//       <option className='text-center' value="2">ซอยมาลี</option>
//       <option className='text-center' value="3">ซอยซูม</option>
//     </Form.Select>
//         </div>
      
//     <div>
//     <p className='link-reset'><Link href='#' className="btn btn-link reset">ล้างค่าทั้งหมด</Link></p>
//     </div>
// {result.map((data, index) => (
//   <Container>
//         <Row>
//           <Col
//             xs={{ span: 12, offset: 0 }}
//             md={{ span: 8, offset: 2 }}
//             xl={{ span: 6, offset: 3 }}
//             xxl={{ span: 6, offset: 3 }}
//             className="mt-4 form"
//           >
//             <Card className="card-restaurant">
//             <a href='/home/restaurant'>
//               <Card.Body className="card-show-food">
//                 <Row>
//                   <Col
//                     xs={{ span: 6, offset: 0 }}
//                     md={{ span: 5, offset: 0 }}
//                     xl={{ span: 5, offset: 0 }}
//                     xxl={{ span: 5, offset: 0 }}
//                     className="show-img"
//                   >
//                     <img className="img-cover-show" src={data.coverImg} alt="" />
//                   </Col>

//                   <Col
//                     xs={{ span: 6, offset: 0 }}
//                     md={{ span: 7, offset: 0 }}
//                     xl={{ span: 7, offset: 0 }}
//                     xxl={{ span: 7, offset: 0 }}
//                     className="show-detail"
//                   >
//                     <div className='detail-right'>
//                     <div className='mb-3 name-right'>
//                     <span className='h2 font-blue'>{data.name}</span>
//                     </div>
//                     <p className='text-dark'>
//                     อาหารที่ขาย : <span className='font-blue'>{data.food}</span>
//                     </p>
//                     <p className='text-dark'>
//                     เวลาเปิด - ปิด : <span className='font-blue'> {data.timeOpen}-{data.timeClose} น.</span>
//                     </p>
//                     <p className='text-dark'>
//                     วันหยุดของร้าน : <span className='font-blue'>{data.holiday.map((holiday, indexHoliday) =>
//                             data.holiday.length - 1 === indexHoliday ? (
//                               <span key={indexHoliday + "holiday"}>
//                                 {holiday}
//                                 <br />
//                               </span>
//                             ) : (
//                               <span key={indexHoliday + "holiday"}>
//                                 {holiday}
//                                 <br />
//                               </span>
//                             )
//                           )}</span>
//                     </p>
//                     <p className='text-dark'>
//                     เรทราคา : <span className='font-blue'>{data.ratePrice} บาท</span>
//                     </p>
//                     <p className='font-blue'>
//                     <FaMapMarkerAlt className='text-danger'/> {data.alley}
//                     </p>
//                     <div className='box-tag'>
//                     <span className="tag">{data.tag.map((tag, indexTag) =>
//                             data.tag.length - 1 === indexTag ? (
//                               <span key={indexTag + "tag"}>
//                                 {tag}
//                                 <br />
//                               </span>
//                             ) : (
//                               <span key={indexTag + "tag"}>
//                                 {tag}
//                                 <br />
//                               </span>
//                             )
//                           )}</span>
//                     </div>
//                     <p className='link-menu mt-0 mb-0 mt-md-4'><Link href='/home/restaurant' className="btn btn-link go-menu">ดูเมนูเพิ่มเติม</Link></p>
//                     </div>
//                   </Col>
//                 </Row>
//               </Card.Body>
//               </a>
//             </Card>
//           </Col>
//         </Row>
//         </Container>
//          ))}
//     </div>
//     )
// } else {
//   return <div>NO DATA</div>;
// }
// }, [restaurants,input]);
// return (
//   <div>{restaurantList}</div>
//  );
// }


// export default Search;