// Press.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './press.scss'; // You can create a separate SCSS file for styling if needed
import { pressLogo1, pressLogo2, pressLogo3, pressLogo4 } from '../../assets';

const Press = () => {
  return (
    <div className="press-section">
      <Container>
        {/* Left Side */}
        <Row className="justify-content-center">
          <Col md={6} className="d-flex flex-column align-items-center">
            <div className="left-side">
              <header className='mission-header-text'> PRESS & NEWS</header>
              <h1>See what the press says about Deliver X</h1>
            </div>
          </Col>
        </Row>

        {/* Right Side (In a Grid) */}
        <Row className="mt-4 justify-content-center">
          <Col md={12}>
            <Row className="cards-grid">
              {/* Card 1 */}
              <Col md={6} lg={6} className="mb-4">
                <Card className="custom-card">
                  <Card.Body>
                    <img src={pressLogo1} alt="" className='pressLogoImage' />
                    <h2>Deliver X raises $26M in series B funding for growth</h2>
                    <div className='pressText'>
                      <p className='pressTextSmall'>Read more</p>
                      <p>Nov 15, 2022</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={6} lg={6} className="mb-4">
                <Card className="custom-card">
                  <Card.Body>
                    <img src={pressLogo2} alt="" className='pressLogoImage' />
                    <h2>Deliver X claims to be the #1 player in the delivery industry</h2>
                    <div className='pressText'>
                      <p className='pressTextSmall'>Read more</p>
                      <p>Nov 15, 2022</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={6} lg={6} className="mb-4">
                <Card className="custom-card">
                  <Card.Body>
                    <img src={pressLogo3} alt="" className='pressLogoImage' />
                    <h2>Introducing curbside ordering with Deliver X</h2>
                    <div className='pressText'>
                      <p className='pressTextSmall'>Read more</p>
                      <p>Nov 15, 2022</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 4 */}
              <Col md={6} lg={6} className="mb-4">
                <Card className="custom-card">
                  <Card.Body>
                    <img src={pressLogo4} alt="" className='pressLogoImage' />
                    <h2>Introducing the Square POS integration with Deliver X</h2>
                    <div className='pressText'>
                      <p className='pressTextSmall'>Read more</p>
                      <p>Nov 15, 2022</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Press;
