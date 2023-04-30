import { useState, useEffect } from 'react';

import {
  LoadScript,
  GoogleMap as GoogleMapOverlay,
} from '@react-google-maps/api';

import { Marker } from './Marker';

import { mapStyles } from './mapStyle';

import { MOCK_MARKERS } from '@/common/fixtures/marker';
import MockThumbnailImage from '@/common/assets/icons/thumbnail.png';

import type { CSSProperties } from 'react';
import type { MarkerInfo } from '@/common/fixtures/marker';

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
  const [markers, setMarkers] = useState<MarkerInfo[]>([]);
  const [mapReady, setMapReady] = useState<boolean>(false);

  const [center] = useState<google.maps.LatLngLiteral>({
    lat: 37.497952,
    lng: 127.027619,
  });

  function handleMapLoad() {
    setMapReady(true);
  }

  useEffect(() => {
    if (mapReady) {
      setMarkers(MOCK_MARKERS);
    }
  }, [mapReady]);

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
