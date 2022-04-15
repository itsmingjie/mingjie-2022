import { globalCss } from './theme-config';

export const globalStyles = globalCss({
  'body': {
    fontFamily: '$sans',
    fontSize: '1rem',
    lineHeight: '24px',
    backgroundColor: '$background',
    color: '$light',
  },

  'a': {
    'color': '$hint',
    'textDecoration': 'none',
    'transition': 'color 0.2s ease-in-out',

    '&:hover': {
      color: '$text',
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '24px',
    margin: 0,
  },
});
