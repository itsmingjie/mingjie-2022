import { styled } from '../../design-system';

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const HeaderTitle = styled('h1', {
  color: '$light',
  fontWeight: 'bold',
});

export const HeaderSubtitle = styled('div', {
  color: '$hint',
});
