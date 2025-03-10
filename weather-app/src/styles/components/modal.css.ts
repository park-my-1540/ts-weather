// Modal.css.ts
import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 99,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modal = style({
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  width: '300px',
  textAlign: 'center',
  boxShadow: '0 10px 40px -14px rgba(0, 0, 0, 0.25)',
});
