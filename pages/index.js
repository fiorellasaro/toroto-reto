import Head from 'next/head'
import Link from 'next/link'


import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import Image from 'next/image'
import LogoName from '../assets/logo.svg'


const Home = () => (
  <>
    <Head>
      <title>Toroto - Reto</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="container-fluid">

      <Row className="pt-5">
        <Col className="my-auto">
          <h1 className="font-weight-bolder">
            <strong>
              Somos desarrolladores de proyectos
            </strong>
          </h1>
          <p className="lead">
            Lorem ipsum
          </p>

          <a className="btn btn-secondary btn-lg" href="https://twitter.com/mike_alche">
            Proponer un proyecto
            </a>
        </Col>
      </Row>
    </Container>

  </>
)

export default Home