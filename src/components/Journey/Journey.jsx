// Journey.js

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './journey.scss'; // You can create a separate SCSS file for styling if needed

const Journey = () => {
  return (
    <div className="journey-section">
      <Container>
        <Row>
          {/* Left Side */}
          <Col md={6}>
            <div className="left-side">
               <header className='mission-header-text'> OUR JOURNEY</header>
              <h1>It has been a long but incredible journey</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
             
              <Button variant='success' className='ml-2 journey-button'>Download app</Button>
          </div>
          </Col>

          {/* Right Side */}
          <Col md={6}>
            <Col className='cards'>
              {/* Card 1 */}
              <Col>
                <Card>
                  <Card.Body>
                   <header>2016</header>
                  <h2>Deliver X was founded</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam. </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col>
                <Card>
                  <Card.Body>
                    <header>2018</header>
                  <h2>Raised Series A at $50M valuation</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
                  </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col>
                <Card>
                  <Card.Body>
                      <header>2019</header>
                  <h2>Raised Series B at $600M valuation</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 4 */}
              <Col>
                <Card>
                  <Card.Body>
                      <header>2022</header>
                  <h2>Raised Series C at $3B valuation</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Journey;
