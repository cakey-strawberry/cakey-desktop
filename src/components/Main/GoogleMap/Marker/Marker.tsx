import Image from 'next/image';
import { OverlayView } from '@react-google-maps/api';

import BookmarkStarIcon from '@/common/assets/icons/bookmark-star.svg';

import {
  MarkerWrapper,
  MarkerImageWrapper,
  BookmarkIconWrapper,
  SelectedMarkerInnerWrapper,
  SelectedMarkerOuterWrapper,
} from './Marker.styled';

import type { ReactElement } from 'react';
import type {
  MarkerProps,
  MarkerStatus,
  StatusMarkerProps,
} from './Marker.types';

function SelectedMarkerWrapper({
  selected,
  children,
}: {
  selected: boolean;
  children: ReactElement;
}): ReactElement {
  if (!selected) return children;

  return (
    <SelectedMarkerOuterWrapper>
      <SelectedMarkerInnerWrapper>{children}</SelectedMarkerInnerWrapper>
    </SelectedMarkerOuterWrapper>
  );
}

function DefaultMarker({ selected, markerImage }: StatusMarkerProps) {
  const markerStatus: MarkerStatus = selected ? 'selected' : 'default';

  return (
    <SelectedMarkerWrapper selected={selected}>
      <MarkerWrapper status={markerStatus}>
        <MarkerImageWrapper>
          <Image alt="store thumbnail" src={markerImage} fill />
        </MarkerImageWrapper>
      </MarkerWrapper>
    </SelectedMarkerWrapper>
  );
}

function BookMarkMarker({ selected, markerImage }: StatusMarkerProps) {
  const markerStatus: MarkerStatus = selected ? 'selected' : 'bookmark';

  return (
    <SelectedMarkerWrapper selected={selected}>
      <MarkerWrapper status={markerStatus}>
        <MarkerImageWrapper>
          <Image alt="store thumbnail" src={markerImage} fill />
        </MarkerImageWrapper>
        <BookmarkIconWrapper>
          <Image alt="bookmark" src={BookmarkStarIcon} width={16} height={16} />
        </BookmarkIconWrapper>
      </MarkerWrapper>
    </SelectedMarkerWrapper>
  );
}

function Marker({ type, selected, position, markerImage }: MarkerProps) {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(width, height) => ({
        x: -(width / 2),
        y: -height,
      })}
    >
      <>
        {type === 'default' && (
          <DefaultMarker selected={selected} markerImage={markerImage} />
        )}
        {type === 'bookmark' && (
          <BookMarkMarker selected={selected} markerImage={markerImage} />
        )}
      </>
    </OverlayView>
  );
}

export default Marker;
