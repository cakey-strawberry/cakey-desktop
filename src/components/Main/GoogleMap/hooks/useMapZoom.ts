import { useState } from 'react';

const MIN_ZOOM = 12;
const MAX_ZOOM = 20;
const DEFAULT_ZOOM = 17;

function useMapZoom() {
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);

  function zoomInMap() {
    setZoom((prevZoom) => {
      if (prevZoom === MAX_ZOOM) return prevZoom;

      return prevZoom + 1;
    });
  }

  function zoomOutMap() {
    setZoom((prevZoom) => {
      if (prevZoom === MIN_ZOOM) return prevZoom;

      return prevZoom - 1;
    });
  }

  return { zoom, zoomInMap, zoomOutMap };
}

export default useMapZoom;
