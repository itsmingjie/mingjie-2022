import { styled } from '../../../design-system';
import { Separator as SeparatorComponent } from '../../../design-system/components/radix/separator';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});

export const LinksList = styled('div', {
  display: 'flex',
  gap: 12,
  alignItems: 'strech',
});

export const Separator = styled(SeparatorComponent, {
  backgroundColor: '$hint',
  width: 1,
  opacity: 0.1,
});
