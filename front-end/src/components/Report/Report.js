import React, { useEffect } from 'react';
import './Report.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import Header from '../Header';
import ContentReport from './ContentReport/ContentReport';

function Report() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="report">
      <div className='page-container'>
        <div className='content-wrap'>
          <div className='fixed-top'>
            <Header />
          </div>
          <ContentReport />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Report;