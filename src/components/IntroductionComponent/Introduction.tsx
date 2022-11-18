import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import CvPicture from '../../images/cvPicture.jpeg';
import './Introduction.scss'

const Introduction: React.FC = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Image src={CvPicture} alt='Image not found'
          width={330}
          height={350}
          className='ml-5 mr-n5 img_style'
          rounded
          ></Image>
        </Col>
        <div className='line'></div>
      </Row>
    </Container>
  );
}

export default Introduction;