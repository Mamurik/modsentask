import styled from 'styled-components';

const BORDER_RADIUS = '0.625rem';
const MARGIN = '0.75rem 0.625rem';
const PADDING = '0.625rem';
const TRACK_IMAGE_HEIGHT = '6rem';
const TRACK_TITLE_FONT_SIZE = '0.875rem';
const TRACK_AUTHOR_FONT_SIZE = '0.75rem';
const TRACK_WIDTH = '14.375rem';
const TRACK_WIDTH_MOBILE = '11.25rem';
const TRACK_WIDTH_SM = '10rem';
export const TrackWrapper = styled.div<{
  $isFixedSize?: boolean;
}>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${TRACK_WIDTH};
  height: auto;
  margin: ${MARGIN};
  padding: ${PADDING};
  background: #fff;
  border: 1px solid rgba(153, 153, 153, 0.1);
  border-radius: ${BORDER_RADIUS};
  box-sizing: border-box;
  transition:
    box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.12);
    transform: translateY(-0.1875rem);
  }

  &:active {
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.18);
    transform: translateY(0);
  }

  ${({ $isFixedSize }) =>
    !$isFixedSize &&
    ` 
    @media (max-width: 48rem) { 
      margin: 0.625rem 0.3125rem; 
      width: ${TRACK_WIDTH_MOBILE}; 
    }

   @media (max-width: 24.375rem) { 
  width: ${TRACK_WIDTH_SM};
  margin: 0;
  padding: 0.5rem 0.5rem;
}
  `}
`;

export const TrackImage = styled.img<{
  $width?: string;
  $height?: string;
  $fixedImageHeight?: boolean;
}>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || TRACK_IMAGE_HEIGHT};
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 24.375rem) {
    height: ${({ $fixedImageHeight }) =>
      $fixedImageHeight ? '12rem' : '5rem'};
  }
`;

export const TrackInfoRow = styled.div`
  margin-top: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TrackText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

export const TrackTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: ${TRACK_TITLE_FONT_SIZE};
  line-height: 1.3125rem;
  color: #6b6b6b;
  margin: 0 0 0.25rem;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TrackAuthor = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: ${TRACK_AUTHOR_FONT_SIZE};
  line-height: 1.3125rem;
  color: #6b6b6b;
  margin: 0;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const IconLike = styled.div`
  margin-left: 0.5rem;
  cursor: pointer;
  flex-shrink: 0;
`;

export const MusicIconWrapper = styled.div<{ $top?: string; $right?: string }>`
  position: absolute;
  right: ${({ $right }) => $right || '1.875rem'};
  top: ${({ $top }) => $top || '3.125rem'};
  cursor: pointer;
`;
