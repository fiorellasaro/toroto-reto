import Link from "next/link";
import Image from 'next/image';
import {getIndex} from '../../shared/_imageProjects'
import imageProjects from '../../shared/_imageProjects'
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Services from '../../components/services'
import Impact from '../../components/impact'
import TooltilIcon from '../../assets/tooltip_icon.svg'
import MapImage from '../../assets/map.webp'

const project = (props) => {
  const { projectProp } = props;

  return (
    <>
      <Container className="container-fluid mobile-padding">
        <div className="pt-5 general-container">
          <div className="general-description">
            <p className="general-location">{projectProp.location}</p>
            <p className="general-name">{projectProp.name}</p>
            <div className="general-services">
                      {
                          projectProp.services.map(service =>{
                              return (
                                  <Services  service={service} key={service}/>
                              )
                          })
                      }
            </div>
            <p className="general-description-text">{projectProp.description}</p>
          </div>
          <Image className="image-detail" src={imageProjects[props.index].src} alt={imageProjects[props.index].alt} width={512} height={440}></Image>
        </div>

        <div className="general-problem">
            <h2>Problematica</h2>
            <p>{projectProp.problem}</p>
        </div>
        <div className="general-implement">
          <div className="general-implement-title">
            <h2>Implementacion</h2> 
            <Image src={TooltilIcon} alt="tooltip icon"></Image> 
          </div>

          <p>Actividades de restauración</p>
          <Accordion defaultActiveKey="0" flush>
            {
              projectProp.activities.map((activitie, indexActi )=>{
                return (
                  <Accordion.Item eventKey={indexActi} key={indexActi}>
                    <Accordion.Header>{activitie.name}</Accordion.Header>
                    <Accordion.Body>
                      {activitie.description}
                    </Accordion.Body>
                  </Accordion.Item>
                  )
              })
            }


          </Accordion>
        </div>
        <div className="general-map">
          <h2>
            Mapa de obras
          </h2>
          <Image src={MapImage} alt="map image obras" width={1040} height={480}></Image>
        </div>
        <div className="general-impact-container">
          <h2 className="general-impact-title">
              Impacto
          </h2>
        <div className="general-impact">
                      {
                          projectProp.impact.map((imp, index) =>{
                              return (
                                  <Impact  name={imp.name}  value={imp.value} key={index}/>
                              )
                          })
                      }
        </div>
        </div>

      </Container>
    </>
  );
};

export default project;

export async function getServerSideProps({ params }) {
  const { id } = params;
  const index = getIndex(id);
  const data = await fetch(`https://fieldops-api.toroto.mx/api/projects/${id}`);
  const project = await data.json();
  const { data: projectData } = project;
  const projectProp = projectData[0]


  return {
    props: {
      projectProp,
      index
    },
  };
}
