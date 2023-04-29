import { useRef, useState } from 'react';
import {
  Marker,
  GoogleMap as GoogleMapOverlay,
  LoadScript,
} from '@react-google-maps/api';

import { MapController } from './MapController';

import useMapZoom from './hooks/useMapZoom';

import { mapStyles } from './mapStyle';

import type { CSSProperties } from 'react';

const INITIAL_LOCATION: google.maps.LatLngLiteral = {
  lat: 37.497952,
  lng: 127.027619,
};

const containerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  marginLeft: '-24px',
};

const mapOptions = {
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
};

function GoogleMap() {
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  const [center, setCenter] =
    useState<google.maps.LatLngLiteral>(INITIAL_LOCATION);

  const { zoom, closeUpMap, closeDownMap } = useMapZoom();

  const mapRef = useRef<google.maps.Map>();

  function handleMapClick(event: google.maps.MapMouseEvent) {
    if (!event.latLng) return;

    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  }

  function handleMapLoad(mapInstance: google.maps.Map) {
    mapRef.current = mapInstance;
  }

  function handleMapDragEnd() {
    const currentLat = mapRef?.current?.getCenter()?.lat();
    const currentLng = mapRef?.current?.getCenter()?.lng();

    if (!currentLat || !currentLng) return;

    const currentCenter: google.maps.LatLngLiteral = {
      lat: currentLat,
      lng: currentLng,
    };

    setCenter(currentCenter);
  }

  function handleLocationControllerClick() {
    setCenter(INITIAL_LOCATION);
  }

  return (
    <LoadScript
      libraries={['places']}
      googleMapsApiKey={
        process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
          ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
          : ''
      }
    >
      <GoogleMapOverlay
        zoom={zoom}
        center={center}
        options={{ styles: mapStyles, ...mapOptions }}
        mapContainerStyle={{ ...containerStyle }}
        onLoad={handleMapLoad}
        onClick={handleMapClick}
        onDragEnd={handleMapDragEnd}
      >
        {markerPosition && <Marker position={markerPosition} />}
        <MapController
          onCloseUpClick={closeUpMap}
          onCloseDownClick={closeDownMap}
          onLocationClick={handleLocationControllerClick}
        />
      </GoogleMapOverlay>
    </LoadScript>
  );
}

export default GoogleMap;
