import Head from 'next/head';
import Image from 'next/image'

import { Container, Row, Col } from 'react-bootstrap'

import Map from '../components/map'
import CardProject from '../components/cardProject'
import {getIndex} from '../shared/_imageProjects';


 
const Home = ({projectsData}) => {

  return (

    <>
    <Head>
      <title>Toroto - Reto</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="container-fluid">

      <Row>
        <Col className="banner-content col-md-4">
          <h1>
              Somos desarrolladores de proyectos
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
    <section className="projects-cards-container">
          <h1 className="projects-cards-section-title">
              Todos nuestros proyectos

          </h1>
          <div className="project-cards">
              {
                projectsData.map(projectData =>{
                  return(
                    <CardProject project={projectData} index={getIndex(projectData.id)}  key={projectData.id} ></CardProject>
                  )
                })
              }
          </div>

    </section>
  </>

  )

}




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