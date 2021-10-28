import Head from 'next/head'

import { Container, Row, Col } from 'react-bootstrap'

import Map from '../components/map'

const Home = ({projectsData}) => (
  <>
    <Head>
      <title>Toroto - Reto</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="container-fluid">

      <Row>
        <Col className="banner-content col-md-4">
          <h1 className="font-weight-bolder">
            <strong>
              Somos desarrolladores de proyectos
            </strong>
          </h1>
          <p className="lead">
            Lorem ipsum
          </p>

          <a className="btn btn-secondary btn-lg" href="/">
            Proponer un proyecto
          </a>
        </Col>
      </Row>
    </Container>
    <section fluid='true'>
      <Map projectsData= {projectsData} />
    </section>

  </>
)

export default Home


export async function getStaticProps() {
  const data = await fetch('https://fieldops-api.toroto.mx/api/projects');
  const projects = await data.json();
  const { data: projectsData } = projects;

  if (!projectsData) {
    return {
       notFound: true,
    }
 }

 return {
    props: {
      projectsData
    }, // will be passed to the page component as props
 }
}