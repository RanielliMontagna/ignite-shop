import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',

    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },

  //scroll
  '::-webkit-scrollbar': {
    width: '0.4rem',
    height: '0.4rem',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: '$gray700',
    borderRadius: '0.4rem',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '0.4rem',
  },

  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '$gray500',
  },
})
