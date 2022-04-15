import { styled } from '../..';

export const ListItemContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const ListItemLeftContainer = styled('div', {
  minWidth: 0,
});

export const ListItemName = styled('div', {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const ListItemRight = styled('div', {
  textAlign: 'right',
  whiteSpace: 'nowrap',
  minWidth: 0,
  fontStyle: 'italic',
  color: '$hint',
});
