import React from 'react';
import { Image, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CvPicture from '../../images/cvPicture.jpeg';
import { calculateAge } from '../../utils/dateUtils'; 
import './Introduction.scss';
import { Github, Linkedin } from '@styled-icons/bootstrap';

const Introduction: React.FC = () => {

  const { t } = useTranslation();

  return (
    <Container className='main_container'>
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
        <Col className='text-center'>
          <Card className='card_style'>
            <Card.Body>
              <Card.Title className='card_title text-start'>{t('card.title')}</Card.Title>
              <Card.Text as='h3'>Omar Vivenes</Card.Text>
              <Card.Text><b>{t('card.job')}: </b>Omar Vivenes</Card.Text>
              <Card.Text><b>{t('card.city')}: </b>{t('card.city-title')} Buenos Aires</Card.Text>
              <Card.Text><b>{t('card.country')}: </b>Argentina</Card.Text>
              <Card.Text><b>{t('card.age')}: </b>{calculateAge('1997-03-11')}</Card.Text>
              <Row>
                <Col>
                  <Button href='https://github.com/PolarMB?tab=repositories' target='_blank' variant='dark'
                    size='lg' className='btn_dimensions'><Github size={25} className='icon_position'></Github>Github</Button>
                </Col>
                <Col>
                  <Button href='https://www.linkedin.com/in/omar-vivenes/' target='_blank'
                    size='lg' className='btn_dimensions'><Linkedin size={25} className='icon_position'></Linkedin>LinkedIn</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;