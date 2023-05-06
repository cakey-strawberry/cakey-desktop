import { useState, useEffect } from 'react';
import {
  LoadScript,
  GoogleMap as GoogleMapOverlay,
} from '@react-google-maps/api';

import { MapController } from './MapController';

import { Marker } from './Marker';

import { mapStyles } from './mapStyle';

import { MOCK_MARKERS } from '@/common/fixtures/marker';
import MockThumbnailImage from '@/common/assets/icons/thumbnail.png';

import type { CSSProperties } from 'react';
import type { MarkerInfo } from '@/common/fixtures/marker';

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
  const [markers, setMarkers] = useState<MarkerInfo[]>([]);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  const [center] = useState<google.maps.LatLngLiteral>({
    lat: 37.497952,
    lng: 127.027619,
  });

  function handleMapLoad() {
    setIsMapReady(true);
  }

  useEffect(() => {
    if (isMapReady) {
      setMarkers(MOCK_MARKERS);
    }
  }, [isMapReady]);

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
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            type={marker.type}
            selected={marker.selected}
            position={marker.position}
            markerImage={MockThumbnailImage}
          />
        ))}
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
