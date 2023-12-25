import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { aboutImage } from '../../assets';
import './about.scss'

const About = () => {
  return (
    <div className="about-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            {/* Image for the left side */}
            <div className="about-image">
              <img src={aboutImage} alt="Mission Image" className="img-fluid" />
            </div>
          </Col>
          
          <Col md={6}>
            {/* Text content for the left side */}
            <div className="about-text">
             <header className='about-header-text'> ABOUT US</header>
              <h1>Our company started back in 2016</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
            </div>
          </Col>
 
        </Row>
      </Container>
    </div>
  )
}

export default About