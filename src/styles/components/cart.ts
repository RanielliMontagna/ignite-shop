import { styled } from '@stitches/react'

export const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,

  background: 'rgba(0, 0, 0, 0.1)',
  zIndex: 2,
})

export const CartContainer = styled('div', {
  position: 'absolute',
  background: '$gray800',
  padding: 48,

  display: 'flex',
  flexDirection: 'column',
  gap: 32,

  width: 480,
  zIndex: 3,

  top: 0,
  bottom: 0,
  right: 0,
})

export const Title = styled('h2', {
  fontSize: '$md',
})

export const CartItems = styled('div', {
  flex: 1,
})

export const CartSummary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const CartButton = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  transition: 'background-color 0.2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: 'background-color 0.2s',
  },
})

export const CartCloseButton = styled('button', {
  zIndex: 4,
  position: 'absolute',
  top: 16,
  right: 16,
  border: 0,
  background: 'transparent',
  cursor: 'pointer',
  color: '$gray300',

  transition: 'color 0.2s',

  '&:hover': {
    color: '$white',
    transition: 'color 0.2s',
  },
})
