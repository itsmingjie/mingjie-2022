import { styled } from '../../design-system';

export const FooterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginTop: 36,
});

export const FooterContent = styled('div', {
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
