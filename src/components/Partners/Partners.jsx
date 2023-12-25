// Partners.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { profile, restaurant, rider } from '../../assets';
import './partners.scss';

const Partners = () => {
  return (
    <div className="partners-section">
      <Container className='partners-section-container'>
        {/* Left Side */}
        <Row className="justify-content-center">
          <Col md={6}>
            {/* Text content for the left side */}
            <div className="partners-text">
              <header className='mission-header-text'> OUR PARTNERS</header>
              <h1>We don’t walk alone, Deliver X works thanks to our partners</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
            </div>
          </Col>
        </Row>

        {/* Right Side (In a Row) */}
        <Row className="mt-4 justify-content-center">
          <Col md={12}>
            {/* Image for the right side */}
            <div className="partners-image d-flex justify-content-around">
              {/* Card 1 */}
              <div>
                <Card>
                  <Card.Body>
                    <img src={profile} alt="Partners Image" />
                    <h2>Customers</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam. </p>
                  </Card.Body>
                </Card>
              </div>

              {/* Card 2 */}
              <div>
                <Card>
                  <Card.Body>
                    <img src={restaurant} alt="Partners Image" />
                    <h2>Restaurants</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam. </p>
                  </Card.Body>
                </Card>
              </div>

              {/* Card 3 */}
              <div>
                <Card>
                  <Card.Body>
                    <img src={rider} alt="Partners Image" />
                    <h2>Riders</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam. </p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partners;
