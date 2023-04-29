import type { StaticImageData } from 'next/image';

export type MarkerStatus = 'default' | 'select' | 'bookmark';

export type MarkerProps = {
  position: google.maps.LatLngLiteral;
  storeImage: StaticImageData | string;
  status: MarkerStatus;
};

export type StatusMarkerProps = {
  storeImage: StaticImageData | string;
};
