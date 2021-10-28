import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap'

import Map from '../components/map'

const Home = () => (
  <>
    <Head>
      <title>Toroto - Reto</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="container-fluid">

      <Row>
        <Col className="banner-content col-md-6">
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
    <section fluid>
      <Map/>
    </section>

  </>
)

export default Home