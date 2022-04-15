import { styled } from '../../design-system';

export const ContentContainer = styled('div', {
  'display': 'flex',
  'flexDirection': 'column',
  'height': '100%',
  'marginTop': '8rem',
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'maxWidth': '92%',

  '@media (min-width: 768px)': {
    maxWidth: 612,
  },
});
