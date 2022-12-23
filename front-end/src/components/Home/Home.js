import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer';
import Header from '../Header';

function HomePage() {
    return (
        <div className="home">
            <Header />
            {/* <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Footer /> */}
        </div>
        
    )
}

export default HomePage;