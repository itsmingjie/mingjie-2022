import { styled } from '../../../../design-system';

export const TrackContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const TrackNameContainer = styled('div', {
  minWidth: 0,
});

export const TrackName = styled('div', {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const TrackArtist = styled('div', {
  textAlign: 'right',
  whiteSpace: 'nowrap',
  minWidth: 0,
  fontStyle: 'italic',
});
