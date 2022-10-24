import { styled } from '../../design-system';

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
});

export const HeaderTitle = styled('h1', {
  fontFamily: '$black',
  fontSize: 'x-large',
  color: '$light',
});

export const HeaderSubtitle = styled('div', {
  color: '$hint',
});
