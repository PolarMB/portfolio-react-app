import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Header.scss';

const HeaderComponent: React.FC = () => {

  const { t, i18n } = useTranslation();
  const languages: any = t('header.languages', { returnObjects: true });
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const navigate = useNavigate();

  const changeLanguage = (lang: string) => {
    return (e: React.MouseEvent) => {

      i18n.changeLanguage(lang);
      defineRoute(lang);

      e.preventDefault();
    }
  }

  const defineRoute = (code: string) => {

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
    <Navbar bg="light" expand="sm" collapseOnSelect={true}>
      <Container fluid>
        <Col className='header_brand'>
          <Navbar.Brand>{t('header.title')}</Navbar.Brand>
        </Col>
        <Col xs={2} className='language-btn'>
          {
            isMobile ?
              <>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className='mr-auto'>
                    {
                      languages.map((lang: any, index: number) => {
                        return (
                          <React.Fragment key={index} >
                            <Nav.Link onClick={changeLanguage(lang.code)}>{lang.name}</Nav.Link>
                          </React.Fragment>
                        )
                      })
                    }
                  </Nav>
                </Navbar.Collapse>
              </>
              :
              <Nav className="ml-auto">
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
          }

        </Col>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;