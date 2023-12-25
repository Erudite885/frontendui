import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { cardBike, cardBurger, heroImage } from '../../assets';
import './hero.scss'

const Hero = () => {
  return (
     <div className="hero-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            {/* Text content for the left side */}
            <div className="hero-text">
             <header className='hero-header-text'> ABOUT DELIVER X</header>
              <h1>We are here to help amazing restaurants get great customers</h1>
              <p>At morbi adipiscing sit sed consectetur senectus Dignissim sed amet tincidunt vitae ultricies ultrices amet fermentum amet neque et id sed lacinia massa pretium aliquam libero et.</p>
             
            </div>
          </Col>
          <Col md={6}>
            {/* Image for the right side */}
            <div className="hero-image">
              <img src={heroImage} alt="Hero Image" className="img-fluid" />
              
              <div className="additional-images">
              <img src={cardBike} alt="Right Image" className="additional-image" />
                <img src={cardBurger} alt="Left Image" className="additional-image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero