import { useRef, useState, useEffect } from 'react';
import {
  LoadScript,
  GoogleMap as GoogleMapOverlay,
} from '@react-google-maps/api';

import { MapController } from './MapController';

import useMapZoom from './hooks/useMapZoom';

import { Marker } from './Marker';

import { mapStyles } from './mapStyle';

import { MOCK_MARKERS } from '@/common/fixtures/marker';
import MockThumbnailImage from '@/common/assets/icons/thumbnail.png';

import type { CSSProperties } from 'react';
import type { MarkerInfo } from '@/common/fixtures/marker';

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
  const [markers, setMarkers] = useState<MarkerInfo[]>([]);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  const [center, setCenter] =
    useState<google.maps.LatLngLiteral>(INITIAL_LOCATION);

  const { zoom, closeUpMap, closeDownMap } = useMapZoom();

  const mapRef = useRef<google.maps.Map>();

  useEffect(() => {
    if (isMapReady) {
      setMarkers(MOCK_MARKERS);
    }
  }, [isMapReady]);

  function handleMapLoad(mapInstance: google.maps.Map) {
    mapRef.current = mapInstance;
    setIsMapReady(true);
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

  function handleCurrentLocationControllerClick() {
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
        onDragEnd={handleMapDragEnd}
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
          onCloseUpClick={closeUpMap}
          onCloseDownClick={closeDownMap}
          onCurrentLocationClick={handleCurrentLocationControllerClick}
        />
      </GoogleMapOverlay>
    </LoadScript>
  );
}

export default GoogleMap;
