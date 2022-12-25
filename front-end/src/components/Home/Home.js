import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import Header from '../Header';
import Banner from './Banner';
import Content from './Content';
import Search from './Search';

function HomePage() {
    return (
        <div className="home">
          
          <div className='page-container'>
          <div className='content-wrap'>
            <Header />
            <Banner />
            <Search />
            <Content />
            </div>
            <Footer />
          </div>
        </div>
        
    )
}

export default HomePage;