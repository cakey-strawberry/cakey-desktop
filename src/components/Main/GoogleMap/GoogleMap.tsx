import { useState } from 'react';

import {
  LoadScript,
  GoogleMap as GoogleMapOverlay,
} from '@react-google-maps/api';

import { Marker } from './Marker';

import { mapStyles } from './mapStyle';

import { MOCK_MARKERS } from '@/common/fixtures/marker';
import MockThumbnailImage from '@/common/assets/icons/thumbnail.png';

import type { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
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
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  const [center] = useState<google.maps.LatLngLiteral>({
    lat: 37.497952,
    lng: 127.027619,
  });

  function handleMapLoad() {
    setIsMapReady(true);
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
        onLoad={handleMapLoad}
      >
        {isMapReady &&
          MOCK_MARKERS.map((marker) => (
            <Marker
              key={marker.id}
              status={marker.status}
              position={marker.position}
              markerImage={MockThumbnailImage}
            />
          ))}
      </GoogleMapOverlay>
    </LoadScript>
  );
}

export default GoogleMap;
