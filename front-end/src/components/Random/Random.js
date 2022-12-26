import React from 'react';
import './Random.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import Header from '../Header';
import ContentRandom from './ContentRandom/ContentRandom';




function Random() {
    return (
        <div className="random">
          
          <div className='page-container'>
          <div className='content-wrap'>
            <Header />
            <ContentRandom />
            </div>
            <Footer />
          </div>
        </div>
        
    )
}

export default Random;