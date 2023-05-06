export type MarkerInfo = {
  id: number;
  position: google.maps.LatLngLiteral;
  type: 'default' | 'bookmark';
  selected: boolean;
};

export const MOCK_MARKERS: MarkerInfo[] = [
  {
    id: 1,
    position: { lat: 37.499245778231405, lng: 127.02520501188661 },
    type: 'bookmark',
    selected: true,
  },
  {
    id: 2,
    position: { lat: 37.49690498447068, lng: 127.02651392988588 },
    type: 'bookmark',
    selected: false,
  },
  {
    id: 3,
    position: { lat: 37.497798750747975, lng: 127.03025829367067 },
    type: 'default',
    selected: false,
  },
  {
    id: 4,
    position: { lat: 37.49774767867745, lng: 127.03054797224428 },
    type: 'bookmark',
    selected: false,
  },
];
