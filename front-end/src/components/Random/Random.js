import React, { useEffect } from 'react';
import './Random.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import Header from '../Header';
import ContentRandom from './ContentRandom/ContentRandom';

function Random() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="random">
      <div className='page-container'>
        <div className='content-wrap'>
          <div className='fixed-top'>
            <Header />
          </div>
          <ContentRandom />
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default Random;