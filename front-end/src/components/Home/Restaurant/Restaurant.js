import React, { useCallback, useEffect, useState } from 'react';
import './Restaurant.css';
import 'reactjs-popup/dist/index.css';
import ContentRestaurant from './ContentRestaurant';
import MenuImg from './MenuImg';
import MapRestaurant from './MapRestaurant';
import Header from '../../Header';
import Footer from '../../Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null)
  const fetchrestaurantsData = useCallback(async (_id) => {
    const response = await axios.get(`http://localhost:5000/restaurants/${_id}`);
    setRestaurant(response.data)
  }, []);

  useEffect(() => {
    if (id) {
      fetchrestaurantsData(id)
    }
  }, [id])

  return (
    <div className="restaurant">
      <div className='page-container'>
        <div className='content-wrap'>
          <div className='fixed-top'>
            <Header />
          </div>
          <ContentRestaurant restaurant={restaurant} />
          <MenuImg restaurant={restaurant} />
          <MapRestaurant restaurant={restaurant} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Restaurant;

