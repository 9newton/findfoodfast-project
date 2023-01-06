import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './ContentRandom.css';
import Form from 'react-bootstrap/Form';
import Img from '../../../image/random.png';
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import axios from 'axios';

function ContentRandom() {
    const [restaurants, setRestaurants] = useState(null)

    const fetchrestaurants = useCallback(async () => {
        const response = await axios.get("http://localhost:5000/restaurants");
        setRestaurants(response.data);
    }, []);

    useEffect(() => {
        fetchrestaurants();
    }, []);

    const randomRestuarant = useMemo(() => {
        if (restaurants) {
            const length = restaurants.length
            const random = Math.floor(Math.random() * length);
            return restaurants[random]
        } else {
            return null
        }
    }, [restaurants])

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
                <Link to="#" className="random-btn">สุ่มร้านอาหาร</Link>
            </div>
            <Image className='img-random' src={Img} alt="" />
            <div>
                <p className='content-wording mt-5'>กด”ปุ่มสุ่มร้านอาหาร”เพื่อดูว่าวันนี้จะกินอะไรดี</p>
            </div>
            {randomRestuarant?.name}
        </div>
    )
}

export default ContentRandom;