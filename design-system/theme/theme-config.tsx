import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, theme, getCssText } =
  createStitches({
    theme: {
      colors: {
        dark: 'hsl(255, 25%, 11%)',
        light: 'hsl(255, 25%, 90%)',
        hint: 'hsl(255, 25%, 55%)',
        yellow: '#E5B73E',
        pink: '#EB5673',
        purple: '#A280E8',
        primary: '$yellow',
        background: '$dark',
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
      },
      fonts: {
        sans: '"IBM Plex Sans", system-ui, sans-serif',
        serif: '"IBM Plex Serif", Times, serif',
        mono: '"IBM Plex Mono", monospace',
        condensed: '"IBM Plex Sans Condensed", system-ui, sans-serif',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  });
