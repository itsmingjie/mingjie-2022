import { styled } from '../../design-system';

export const MarkdownWrapper = styled('div', {
  'fontSize': '1rem',
  'lineHeight': '28px',
  'maxWidth': '100%',

  'h1, h2, h3, h4, h5,  h6': {
    'color': '$light',
    'fontWeight': 'bold',
    'fontSize': '1rem',
    'marginTop': '2rem',

    '&:first-child': {
      marginTop: '0',
    },
  },

  'p': {},

  'img': {
    maxWidth: '100%',
  },
});
