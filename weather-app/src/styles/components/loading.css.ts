import { style, keyframes } from '@vanilla-extract/css';
export const loading = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: 99,
  background: '#000000a8'
})

export const icon = style({
  position: 'relative',
  display: 'inline-block',
  width: '12em',
  height: '10em',
  fontSize: '1em', // icon size
});

export const sun = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '2.5em',
  height: '2.5em',
  margin: '-1.25em',
  borderRadius: '50%',
  boxShadow: '0 0 0 0.375em #fff',
});

export const rays = style({
  position: 'absolute',
  top: '-2em',
  left: '50%',
  display: 'block',
  width: '0.375em',
  height: '1.125em',
  marginLeft: '-0.1875em',
  background: '#fff',
  borderRadius: '0.25em',
  boxShadow: '0 5.375em #fff',
  selectors: {
    '&:before, &:after': {
      content: '',
      position: 'absolute',
      top: '0em',
      left: '0em',
      display: 'block',
      width: '0.375em',
      height: '1.125em',
      transform: 'rotate(60deg)',
      transformOrigin: '50% 3.25em',
      background: '#fff',
      borderRadius: '0.25em',
      boxShadow: '0 5.375em #fff',
    },
    '&:before': {
      transform: 'rotate(120deg)',
    },
  },
});

const spin = keyframes({
  '100%': { transform: 'rotate(360deg)' },
});

export const animatedSun = style([
  sun,
  { animation: `${spin} 12s infinite linear` },
]);
