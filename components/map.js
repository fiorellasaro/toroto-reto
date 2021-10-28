import ReactMapGL , {Source, Layer} from 'react-map-gl';
import {  useState  } from 'react';

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

function map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100vh',
        zoom: 12,
        latitude: 37.78,
        longitude: -122.45,
    });

    return (
        <ReactMapGL
            {...viewport}
            // onViewportChange={(viewport) => setViewport(viewport)}
            mapStyle='mapbox://styles/fiorellasaro/ckv8msd2p13hy14rx808pvewo' 
            mapboxApiAccessToken={process.env.mapbox_key}
        >
              <Source id="my-data" type="geojson" data={geojson}>
              <Layer {...layerStyle} />
              </Source>    
        </ReactMapGL>


    )
}

export default map
