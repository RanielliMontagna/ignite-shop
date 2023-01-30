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
})
