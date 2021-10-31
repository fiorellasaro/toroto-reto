import ReactMapGL , {Source, Layer, Marker} from 'react-map-gl';
import {  useState  } from 'react';
import { OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';
import imagesProjects from '../shared/_imageProjects';
import {getIndex} from '../shared/_imageProjects';




function map({ projectsData }) {

  const [viewport, setViewport] = useState({
        width: '100%',
        height: '90vh',
        zoom: 5,
        longitude: -99.1319437,
        latitude: 18.47103,
  });


  const [show, setShow] = useState(false);
  
  const renderTooltip = (project) => (
      <Tooltip id="mytooltip" key={project.id} >
        <Link  href={`/projects/${project.id}`}>
          <div >
          <Image src={imagesProjects[getIndex(project.id)].src} alt={imagesProjects[getIndex(project.id)].alt} />
          <div className="card-tooltip-container">
            <p className="card-tooltip-location">{project.location}</p>
            <h2 className="card-tooltip-name">{project.name}</h2>
            <p className="card-tooltip-description">{project.description}</p>
          </div>

          </div>
        </Link>
      </Tooltip>

  );

    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapStyle='mapbox://styles/fiorellasaro/ckv8msd2p13hy14rx808pvewo' 
            mapboxApiAccessToken={process.env.mapbox_key}
        >
            {projectsData.map(result =>(
                <div key={result.id}>
                    <Marker
          
                        longitude={result.geometry.coordinates[0][0][0]}
                        latitude={result.geometry.coordinates[0][0][1]}
                    >
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 500 }}
                        overlay={renderTooltip(result)}
                      
                      >
                        <div  id="circle-dot" aria-label="hover dot location projects"></div>  
                      </OverlayTrigger>

                    </Marker>
                </div>
            ))}
        </ReactMapGL>


    )
}

export default map
