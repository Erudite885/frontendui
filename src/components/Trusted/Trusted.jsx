import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './trusted.scss'; // You can create a separate SCSS file for styling if needed


const Trusted = () => {
  return (
   <div className="trusted-section" style={{ backgroundColor: '#ededed' }}>
      <Container>
        <Row className="trusted-content">
          <Col>
            <h2>10M <span style={{ color: '#ff5634' }}>+</span> </h2>
            <p>Happy Customers</p>
            {/* Add your trusted content here */}
          </Col>
           <Col>
            <h2>500K <span style={{ color: '#ff5634' }}>+</span> </h2>
            <p>Restaurants Available</p>
            {/* Add your trusted content here */}
          </Col> <Col>
            <h2>30M <span style={{ color: '#ff5634' }}>+</span> </h2>
            <p>Successful deliveries</p>
            {/* Add your trusted content here */}
          </Col> <Col>
            <h2>99.9% <span style={{ color: '#ff5634' }}>+</span> </h2>
            <p>Customer satisfaction</p>
            {/* Add your trusted content here */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trusted