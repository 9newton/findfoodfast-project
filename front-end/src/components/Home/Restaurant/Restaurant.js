import React from 'react';
import './Restaurant.css';
import 'reactjs-popup/dist/index.css';
import ContentRestaurant from './ContentRestaurant';
import Header from '../../Header';
import Footer from '../../Footer';

function Restaurant() {

  return (
    <div className="restaurant">
    
    <div className='page-container'>
          <div className='content-wrap'>
            <Header />
            <ContentRestaurant />
            </div>
            <Footer />
          </div>
    </div>
  )

}

export default Restaurant;

