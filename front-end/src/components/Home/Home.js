import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import Header from '../Header';
import Banner from './Banner/Banner';
import ContentHome from './ContentHome/ContentHome';


function HomePage() {
    return (
        <div className="home">

            <div className='page-container'>
                <div className='content-wrap'>
                    <div className='fixed-top'>
                        <Header />
                    </div>
                    <Banner />
                    <ContentHome />
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default HomePage;