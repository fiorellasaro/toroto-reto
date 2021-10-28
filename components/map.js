import ReactMapGL , {Source, Layer, Marker, Popup} from 'react-map-gl';
import {  useState  } from 'react';
import getCenter from 'geolib/es/getCenter';

const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };

function map({ projectsData }) {



    // const coordinates = projectsData.map(result => ({
    //         longitude: result.geometry.coordinates[0][0][0],
    //         latitude: result.geometry.coordinates[0][0][1]
    //     })
    // );
    
    // const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100vh',
        zoom: 5,
        longitude: -99.1319437,
        latitude: 18.47103,
        // longitude: center.longitude,
        // latitude: center.latitude,
    });

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
                      <div className="circle-dot"></div>  
                    </Marker>
                </div>
            ))}
        </ReactMapGL>


    )
}

export default map
