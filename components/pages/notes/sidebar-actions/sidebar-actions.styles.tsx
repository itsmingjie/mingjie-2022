import { styled } from '../../../../design-system';

export const ActionsTrigger = styled('a', {
  marginTop: '$3',
  cursor: 'pointer',
});

export const ActionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  marginTop: '$3',
  transition: 'all 170ms cubic-bezier(0.2, 0, 0.3, 1)',

  variants: {
    expanded: {
      true: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      false: {
        opacity: 0,
        transform: 'translateY(-${$3})',
      },
    },
  },
});

export const Action = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
