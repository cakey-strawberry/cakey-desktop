import type { StaticImageData } from 'next/image';

export type MarkerType = 'default' | 'bookmark';

export type MarkerStatus = MarkerType | 'selected';

export type MarkerProps = {
  type: MarkerType;
  selected: boolean;
  position: google.maps.LatLngLiteral;
  markerImage: StaticImageData | string;
};

export type StatusMarkerProps = {
  selected: boolean;
  markerImage: StaticImageData | string;
};
