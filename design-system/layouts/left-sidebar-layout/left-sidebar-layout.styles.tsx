import { styled } from '../../theme/theme-config';

export const LayoutContainer = styled('div', {
  'display': 'flex',
  'flexDirection': 'column',
  'gap': '1rem',
  'maxWidth': '92%',
  'height': '100%',
  'marginTop': '8rem',
  'marginLeft': 'auto',
  'marginRight': 'auto',

  '@media (min-width: 768px)': {
    maxWidth: 804,
    flexDirection: 'row',
    gap: 0,
  },
});

export const SidebarContainer = styled('div', {
  width: 192,
});

export const ContentContainer = styled('div', {
  'display': 'flex',
  'flexDirection': 'column',

  '@media (min-width: 768px)': {
    maxWidth: 612,
  },
});
