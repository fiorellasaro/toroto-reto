import Head from 'next/head'
import Link from 'next/link'


import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import Image from 'next/image'
import LogoName from '../assets/logo.svg'


const project = () => (
  <>

    <Container className="container-fluid">

      <Row className="pt-5">
        <Col className="my-auto">
            <Link  href="/"><a>Volver a proyectos</a></Link>
        </Col>
      </Row>
    </Container>

  </>
)

export default project