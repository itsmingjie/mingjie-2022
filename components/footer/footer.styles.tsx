import { styled } from '../../design-system';

export const FooterContainer = styled('div', {
  margin: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  color: '$hint',
});

export const FooterLeft = styled('div', {});

export const FooterRight = styled('div', {
  fontFamily: '$serif',
  fontStyle: 'italic',
});
