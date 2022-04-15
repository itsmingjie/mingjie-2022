import { styled } from '../../../design-system';
import { spin } from '../../animations';

export const StyledSpinner = styled('svg', {
  marginTop: '0.75rem',
  animation: `${spin} 1s linear infinite`,
  width: '1.25rem',
  height: '1.25rem',
  fill: '$light',
  color: '$hint',
});
