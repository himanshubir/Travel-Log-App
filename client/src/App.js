import * as React  from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { listLogEntries } from './API';
import OurMarker from './components/OurMarker';


const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [newMarker, setNewMarker] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 30,
    longitude: 0,
    zoom: 2.5,
    minZoom: 1.5,
  });
  const getEntries = async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
  }

  useEffect(() =>{
    getEntries();
  }, []);

  const showNewMarkerPopup = (event) =>{
    const [longitude, latitude] = event.lngLat;
    setNewMarker({
      longitude,
      latitude,
    })
  }
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/himanshubiradar/ckhxn18e70un219qlwhq05q5i"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onDblClick={showNewMarkerPopup}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
    {
      logEntries.map(entry =>{
        return(
          <div key={entry._id}>
            <OurMarker entry={entry} viewport={viewport} newMarker = {newMarker} setNewMarker ={setNewMarker} getEntries={getEntries}/>
          </div>
        )
      })
    }
    </ReactMapGL>
  );
}
export default App;