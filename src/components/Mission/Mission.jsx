import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { missionImage } from '../../assets';
import './mission.scss'

const Mission = () => {
  return (
    <div className="mission-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            {/* Text content for the left side */}
            <div className="mission-text">
             <header className='mission-header-text'> OUR MISSION</header>
              <h1>Our mission is to disrupt the food industry</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
             
            </div>
          </Col>
          <Col md={6}>
            {/* Image for the right side */}
            <div className="mission-image">
              <img src={missionImage} alt="Mission Image" className="img-fluid" />
              
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mission