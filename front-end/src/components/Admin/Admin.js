import React from 'react';
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import MenuAdmin from './AdminMenu/MenuAdmin';




function Admin() {
    return (
        <div className="report">
          
          <div className='page-container'>
          <div className='content-wrap'>
            <MenuAdmin />
            </div>
            <Footer />
          </div>
        </div>
        
    )
}

export default Admin;