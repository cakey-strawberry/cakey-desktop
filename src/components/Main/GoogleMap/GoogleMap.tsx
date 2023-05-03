import { useState } from 'react';
import {
  Marker,
  GoogleMap as GoogleMapOverlay,
  LoadScript,
} from '@react-google-maps/api';

import { MapController } from './MapController';

import { mapStyles } from './mapStyle';

import type { CSSProperties } from 'react';

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

  const [center] = useState<google.maps.LatLngLiteral>({
    lat: 37.497952,
    lng: 127.027619,
  });

  function handleMapClick(event: google.maps.MapMouseEvent) {
    if (!event.latLng) return;

    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
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
        zoom={17}
        center={center}
        options={{ styles: mapStyles, ...mapOptions }}
        mapContainerStyle={{ ...containerStyle }}
        onClick={handleMapClick}
      >
        {markerPosition && <Marker position={markerPosition} />}
        <MapController
          onCloseUpClick={() => console.log('close up')}
          onCloseDownClick={() => console.log('close down')}
          onLocationClick={() => console.log('location')}
        />
      </GoogleMapOverlay>
    </LoadScript>
  );
}

export default GoogleMap;
