// global.css.ts
import "./layers.css";
import "./reset.css";

import * as layers from './layers.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('#__next',
    {
      '@layer': {
        [layers.reset]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
      },
    }
);

globalStyle('body, html', {
    '@layer': {
      [layers.reset]: {
        height: '100%',
      },
    },
  });
