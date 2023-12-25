// CTA.js

import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './cta.scss';
import { navLogo } from '../../assets';

const CTA = () => {
  return (
    <Row className="mt-4 justify-content-center cta-section">
      {/* Left Side */}
      <Col md={6} className="text-start">
        <img src={navLogo} alt="Logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</p>
      </Col>

      {/* Right Side */}
      <Col md={6} className="text-center">
        <Row>
          <Col>
            <Button variant="danger" style={{ backgroundColor: '#ff5634' }} className="mr-1"> {/* Set variant to "danger" */}
              Button 1
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" style={{ backgroundColor: '#ff5634' }}> {/* Set background color inline */}
              Button 2
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CTA;
