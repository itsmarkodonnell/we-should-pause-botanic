import React, { Fragment } from "react";
import { Marker } from "@react-google-maps/api";
import MarkersList from "./data";
import { getDistanceBetween } from "./utils";
const CATCHMENT_AREA = 50;

const SingleMarker = ({
  index,
  pinPosition,
  currentLocation,
  chooseActivePin,
}) => {
  let distanceBetweenCatchement;
  if (currentLocation) {
    distanceBetweenCatchement = getDistanceBetween(
      pinPosition,
      currentLocation
    );
  }
  const isPinWithinCatchment = distanceBetweenCatchement < CATCHMENT_AREA;

  let iconMarker = new window.google.maps.MarkerImage(
    `https://prod-pause-website.s3.eu-west-2.amazonaws.com/markers/M${index}.png`,
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new window.google.maps.Size(22, 22)
  );
  return (
    <Marker
      key={index.toString()}
      position={pinPosition}
      icon={iconMarker}
      onClick={() => chooseActivePin(index)}
      animation={
        isPinWithinCatchment
          ? window.google.maps.Animation.BOUNCE
          : window.google.maps.Animation.NONE
      }
    />
  );
};

export const Markers = ({ currentLocation, chooseActivePin }) => {
  const renderedPins = MarkersList.map(({ position }, index) => {
    return (
      <SingleMarker
        key={index}
        index={index}
        pinPosition={position}
        currentLocation={currentLocation}
        chooseActivePin={chooseActivePin}
      />
    );
  });

  return <Fragment>{renderedPins}</Fragment>;
};
