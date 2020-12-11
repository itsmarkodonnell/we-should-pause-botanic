import React, { useState } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  useLoadScript,
  GroundOverlay,
} from "@react-google-maps/api";
import Spinner from "../components/Spinner"
import { Markers } from "./Markers";
import { ModalSheet } from "./components/ModalSheet"
import useCurrentLocation from "./hooks/useCurrentLocation";
import mapStyles from "./styles";

require("dotenv").config();

const MAP_BOUNDS = {
  north: 54.58497002626005,
  south: 54.57637503025374,
  east: -5.924422572667526,
  west: -5.939446041311975,
};

const libraries = ["geometry", "places"];

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

export const MapPage = (props) => {
  const [activePin, setActivePin] = useState();
  const [isModalOpen, toggleModalOpen] = useState(false);

  const chooseActivePin = (index) => {
    setActivePin(index)
    toggleModalOpen(true);
  }

  // const { currentLocation, error } = useCurrentLocation(geolocationOptions);

  const currentLocation = {
    longitude: -5.935991100486273,
    latitude: 54.58311740194745,
  };
  const loadScriptOptions = {
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  };
  const { isLoaded, loadError } = useLoadScript(loadScriptOptions);
  if (loadError) return <h1>Error loading maps</h1>;
  if (!isLoaded) return <Spinner />;
  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        zoom={16}
        center={{ lat: 54.5824, lng: -5.9325 }}
        options={{ styles: mapStyles, disableDefaultUI: true }}
      >
        <GroundOverlay bounds={MAP_BOUNDS} url={require("./botanic-map.png")} />
        <Markers
          currentLocation={currentLocation}
          chooseActivePin={chooseActivePin}
        />
      </GoogleMap>
      <ModalSheet isOpen={isModalOpen} toggleIsOpen={toggleModalOpen} activePin={activePin} />
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 100vw;
  background-color: pink;
  position: relative;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  z-index: 30;
`;
