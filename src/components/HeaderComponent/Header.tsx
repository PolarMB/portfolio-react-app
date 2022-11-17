import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './Header.scss';

const HeaderComponent: React.FC = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Col>
          <Navbar.Brand>Portfolio</Navbar.Brand>
        </Col>
        <Col xs={2} className='language-btn'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">English</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/spanish">Spanish</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;