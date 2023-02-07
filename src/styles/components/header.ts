import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  border: 'none',
  borderRadius: 6,
  padding: 12,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 48,
  height: 48,

  backgroundColor: '$gray800',
  color: '$gray300',

  cursor: 'pointer',

  position: 'relative',
  '&::after': {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '$green500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$white',
    border: '3px solid $gray900',
  },
})
