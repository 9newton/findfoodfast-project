import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AdminDashboard() {

  return (
    <div className="content">
      <h1 className='content-head mb-4 mt-4 mt-md-0'>แดชบอร์ด</h1>
    </div>
  )

}

export default AdminDashboard;

