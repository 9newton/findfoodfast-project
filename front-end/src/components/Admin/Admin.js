import React from 'react';
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import Header from '../Header';
import Content from './Content';


function Admin() {
    return (
        <div className="report">
          
          <div className='page-container'>
          <div className='content-wrap'>
            <Header />
            <Content />
            </div>
            <Footer />
          </div>
        </div>
        
    )
}

export default Admin;