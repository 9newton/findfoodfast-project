import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import Header from '../Header';
import Banner from './Banner';
import ContentHome from './ContentHome';
import Search from './Search';

function HomePage() {
    return (
        <div className="home">
          
          <div className='page-container'>
          <div className='content-wrap'>
            <Header />
            <Banner />
            <Search />
            <ContentHome />
            </div>
            <Footer />
          </div>
        </div>
        
    )
}

export default HomePage;