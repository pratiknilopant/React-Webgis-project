import './index.css';
import './App.css'
import Navbar from './Navigation/Navbar.js'
import Box from './components/Box'
import { useRef, useState, useEffect } from "react";
import setupMap from "./components/setupMap";

function App() {

  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const mapElement = useRef();
  useEffect(() => {
    const [initialMap, initialFeaturesLayer] = setupMap(mapElement.current);
    setMap(initialMap);
    setFeaturesLayer(initialFeaturesLayer);
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        {/* <MapWrapper /> */}
        <div ref={mapElement} className="map-container" />
        <Box />
      </div>
    </>
  );
}

export default App;
