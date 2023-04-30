import Image from 'next/image';
import { OverlayView } from '@react-google-maps/api';

import {
  MarkerWrapper,
  MarkerImageWrapper,
  BookmarkIconWrapper,
  SelectedMarkerInnerWrapper,
  SelectedMarkerOuterWrapper,
} from './Marker.styled';

import BookmarkStarIcon from '@/common/assets/icons/bookmark-star.svg';

import type { MarkerProps, StatusMarkerProps } from './Marker.types';

function DefaultMarker({ markerImage }: StatusMarkerProps) {
  return (
    <MarkerWrapper status="default">
      <MarkerImageWrapper>
        <Image alt="store thumbnail" src={markerImage} fill />
      </MarkerImageWrapper>
    </MarkerWrapper>
  );
}

function BookMarkMarker({ markerImage }: StatusMarkerProps) {
  return (
    <MarkerWrapper status="bookmark">
      <MarkerImageWrapper>
        <Image alt="store thumbnail" src={markerImage} fill />
      </MarkerImageWrapper>
      <BookmarkIconWrapper>
        <Image alt="bookmark" src={BookmarkStarIcon} width={16} height={16} />
      </BookmarkIconWrapper>
    </MarkerWrapper>
  );
}

function SelectedMarker({ markerImage }: StatusMarkerProps) {
  return (
    <SelectedMarkerOuterWrapper>
      <SelectedMarkerInnerWrapper>
        <MarkerWrapper status="select">
          <MarkerImageWrapper>
            <Image alt="store thumbnail" src={markerImage} fill />
          </MarkerImageWrapper>
        </MarkerWrapper>
      </SelectedMarkerInnerWrapper>
    </SelectedMarkerOuterWrapper>
  );
}

function Marker({ status, position, markerImage }: MarkerProps) {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(width, height) => ({
        x: -(width / 2),
        y: -height,
      })}
    >
      {status === 'default' && <DefaultMarker markerImage={markerImage} />}
      {status === 'bookmark' && <BookMarkMarker markerImage={markerImage} />}
      {status === 'select' && <SelectedMarker markerImage={markerImage} />}
    </OverlayView>
  );
}

export default Marker;
