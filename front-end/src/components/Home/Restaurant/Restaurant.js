import React from 'react';
import './Restaurant.css';
import 'reactjs-popup/dist/index.css';
import ContentRestaurant from './ContentRestaurant';
import MenuImg from './MenuImg';
import MapRestaurant from './MapRestaurant';
import Header from '../../Header';
import Footer from '../../Footer';

function Restaurant() {

  return (
    <div className="restaurant">
    
    <div className='page-container'>
          <div className='content-wrap'>
            <div className='fixed-top'>
            <Header />
            </div>
            <ContentRestaurant />
            <MenuImg />
            <MapRestaurant />
            </div>
            <Footer />
          </div>
    </div>
  )

}

export default Restaurant;

