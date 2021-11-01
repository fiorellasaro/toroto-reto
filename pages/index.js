import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from '../assets/chevron-down.svg'

import { Container, Row, Col } from 'react-bootstrap'

import Map from '../components/map'
import CardProject from '../components/cardProject'
import {getIndex} from '../shared/_imageProjects';
import {useRef} from 'react'


 
const Home = ({projectsData}) => {

  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });  

  return (

    <>
    <Head>
      <title>Toroto - Reto</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container className="container-fluid main-container">

      <Col className="content">
        <Row>
          <Col className="banner-content col-md-4">
            <h1>
                Somos desarrolladores de proyectos
            </h1>
            <p className="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <a className="btn btn-secondary btn-lg" href="/">
              Proponer un proyecto
            </a>



          </Col>
        </Row>

        <Row className="justify-content-center">
          <div onClick={executeScroll} className="button-see-more-projects-container">
                <p>VER LISTA COMPLETA DE PROYECTOS</p>
                <Image src={ArrowIcon} alt="arrow down to see projects"></Image>
          </div>
        </Row>
      </Col>
    </Container>
    <section fluid='true' className="map-container">
      <Map projectsData= {projectsData} />
    </section>
    <section  className="projects-cards-container">
          <h1 ref={myRef} className="projects-cards-section-title">
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