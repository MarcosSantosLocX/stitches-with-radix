import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  background: '$gray4',
  border: '2px dashed',
  borderColor: '$violet8',
  borderRadius: '$3',
  marginY: '$10',
  marginX: 'auto',
  padding: '$5',
  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

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
