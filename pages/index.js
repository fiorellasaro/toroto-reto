import Head from 'next/head';
import Image from 'next/image'

import { Container, Row, Col } from 'react-bootstrap'

import Map from '../components/map'
import CardProject from '../components/cardProject'
import Img01 from '../assets/img_project_1.webp';
import Img02 from '../assets/img_project_2.webp';
import Img03 from '../assets/img_project_3.webp';
import Img04 from '../assets/img_project_4.webp';


const Home = ({projectsData}) => {
  const imagesProjects = [
    {
      id: 'P001',
      alt: "project 1 image",
      src: Img01
    },
    {
      id: 'P002',
      alt: "project 2 image",
      src: Img02
    },
    {
      id: 'P003',
      alt: "project 3 image",
      src: Img03
    },
    {
      id: 'P004',
      alt: "project 4 image",
      src: Img04
    }
  ]



  function getIndex(id){
    return (imagesProjects.map(e => e.id).indexOf(id))
  }

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
                    <CardProject project={projectData} index={getIndex(projectData.id)} ></CardProject>
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