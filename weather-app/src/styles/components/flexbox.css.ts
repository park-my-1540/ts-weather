import { sprinkles } from '../common/sprinkles.css';

export const flexRowBetween = sprinkles({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const flexRowAround = sprinkles({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
});
