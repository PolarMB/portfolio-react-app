import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const HeaderComponent: React.FC = () => {

  const { t, i18n } = useTranslation();
  const languages: any = t('header.languages', { returnObjects: true });

  const navigate = useNavigate();

  const changeLanguage = (lang: string) => {
    return (e: React.MouseEvent) => {

      i18n.changeLanguage(lang);
      defineRoute(lang);

      e.preventDefault();
    }
  }

  const defineRoute = (code: string) => {

    console.log('Entro');

    switch (code) {
      case "es":
        navigate('/spanish');
        break;
      case "en":
        navigate('/');
        break;
      default:
        navigate('/');
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Col>
          <Navbar.Brand>{t('header.title')}</Navbar.Brand>
        </Col>
        <Col xs={2} className='language-btn'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={t('header.language-message')} id="basic-nav-dropdown">
                {
                  languages.map((lang: any, index: number) => {
                    return (
                      <React.Fragment key={index} >
                        <NavDropdown.Item onClick={changeLanguage(lang.code)}>{lang.name}</NavDropdown.Item>
                        {(languages.length - 1) !== index ? <NavDropdown.Divider /> : <></>}
                      </React.Fragment>
                    )
                  })
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;