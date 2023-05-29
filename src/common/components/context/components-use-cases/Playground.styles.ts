import { styled } from '@/styles/stitches.config'

export const CardGroup = styled('div', {
  width: "100%",
  display: 'grid',
  rowGap: '$10'
});

export const Card = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  gap: '$2',
  background: '$gray1',
  padding: '$5',
  border: 'none',
  borderRadius: '$3',
  textAlign: 'center'
});

export const GroupButton = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6'
});
