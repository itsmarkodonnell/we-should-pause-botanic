function getDistanceBetween(pinPosition, currentLocation) {
  return window.google.maps.geometry.spherical.computeDistanceBetween(
    new window.google.maps.LatLng(pinPosition.lat, pinPosition.lng),
    new window.google.maps.LatLng(currentLocation.latitude, currentLocation.longitude)
  );
}

export { getDistanceBetween };
