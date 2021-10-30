import ReactMapGL , {Source, Layer, Marker} from 'react-map-gl';
import {  useState  } from 'react';
import getCenter from 'geolib/es/getCenter';
import { OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap'
import Popup from './popup';
import Img01 from '../assets/img_project_1.webp';
import Img02 from '../assets/img_project_2.webp';
import Img03 from '../assets/img_project_3.webp';
import Img04 from '../assets/img_project_4.webp';
import Image from 'next/image'


// const geojson = {
//     type: 'FeatureCollection',
//     features: [
//       {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
//     ]
//   };

//   const layerStyle = {
//     id: 'point',
//     type: 'circle',
//     paint: {
//       'circle-radius': 10,
//       'circle-color': '#007cbf'
//     }
//   };



function map({ projectsData }) {

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

    // const coordinates = projectsData.map(result => ({
    //         longitude: result.geometry.coordinates[0][0][0],
    //         latitude: result.geometry.coordinates[0][0][1]
    //     })
    // );
    
    // const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '90vh',
        zoom: 5,
        longitude: -99.1319437,
        latitude: 18.47103,
        // longitude: center.longitude,
        // latitude: center.latitude,
    });

    const [selectedLocation, setSelectedLocation] = useState({
  });
  const [show, setShow] = useState(false);
  
  const renderTooltip = (project) => (
    <Tooltip id="mytooltip" key={project.id} >

      <Image src={imagesProjects[getIndex(project.id)].src} alt={imagesProjects[getIndex(project.id)].alt} className="-image"/>
      <p>{project.location}</p>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
   
    </Tooltip>
  );

    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapStyle='mapbox://styles/fiorellasaro/ckv8msd2p13hy14rx808pvewo' 
            mapboxApiAccessToken={process.env.mapbox_key}
        >
              {/* <Source id="my-data" type="geojson" data={geojson}>
              <Layer {...layerStyle} />
              </Source>     */}
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
