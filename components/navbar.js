import Head from 'next/head'
import Link from 'next/link'


import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import Image from 'next/image'
import LogoName from '../assets/logo.svg'


const Navb = () => (
  <>
    <Navbar className="nav-bg" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
            <Image
              src={LogoName} // Route of the image file
              height={56} // Desired size with correct aspect ratio
              width={89} // Desired size with correct aspect ratio
              alt="Toroto logo"
            />{' '}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">PROYECTOS</Nav.Link>
            <Nav.Link href="/about">SOBRE TOROTO</Nav.Link>
            <Nav.Link href="/about">BLOG</Nav.Link>
            <Nav.Link href="/about">META REGISTRO</Nav.Link>
            <Button variant="light">            
            <a href="/contact">CONTACTO</a>
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  </>
)

export default Navb