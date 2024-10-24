import {
    defineProperties,
    createSprinkles
  } from '@vanilla-extract/sprinkles';
  
  const space = {
    none: 0,
    small: '4px',
    medium: '10px',
    large: '16px'
    // etc.
  };
  
  const responsiveProperties = defineProperties({
    conditions: {
      mobile: {},
      tablet: { '@media': 'screen and (min-width: 768px)' },
      desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
      display: ['none', 'flex', 'block', 'inline'],
      flexDirection: ['row', 'column'],
      gap: ['16px', '24px'],
      justifyContent: [
        'stretch',
        'flex-start',
        'center',
        'flex-end',
        'space-around',
        'space-between'
      ],
      alignItems: [
        'stretch',
        'flex-start',
        'center',
        'flex-end'
      ],
      paddingTop: space,
      paddingBottom: space,
      paddingLeft: space,
      paddingRight: space
      // etc.
    },
    shorthands: {
      padding: [
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight'
      ],
      paddingX: ['paddingLeft', 'paddingRight'],
      paddingY: ['paddingTop', 'paddingBottom'],
      placeItems: ['justifyContent', 'alignItems']
    }
  });
  
  export const colors = {
    'blue-50': '#eff6ff',
    'blue-100': '#dbeafe',
    'blue-200': '#bfdbfe',
    'gray-100': '#f9f9f9',
    'gray-200': '#f2f2f2',
    'gray-300': '#f4f4f4',
    'gray-400': '#727272',
    'gray-500': '#ececec',
    'gray-600': '#999',
    'gray-700': '#444',
    'gray-800': '#666',
    'white': '#fff',
    'black-100': '#212226',
    'black-200': '#33353D',
    'black-600': '#212023'
    // etc.
  };
  
  const colorProperties = defineProperties({
    conditions: {
      lightMode: {},
      darkMode: { '@media': '(prefers-color-scheme: dark)' }
    },
    defaultCondition: 'lightMode',
    properties: {
      color: colors,
      background: colors
      // etc.
    }
  });
  
  export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties
  );
  
  // It's a good idea to export the Sprinkles type too
  export type Sprinkles = Parameters<typeof sprinkles>[0];