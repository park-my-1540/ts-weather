import { vars } from '@/styles/common/createThemeContract.css'
import { theme } from '@/styles/common/theme.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css'

const base = {
    background: vars.color.bgInactive,
}
const variants = {
    theme: {
    lime: {
      selectors: {
        '&.on': { background: theme.theme.lime },
      },
    },
    green: {
      selectors: {
        '&.on': { background: theme.theme.green },
      },
    },
    blue: {
      selectors: {
        '&.on': { background: theme.theme.blue },
      },
    },
    purple: {
      selectors: {
        '&.on': { background: theme.theme.purple },
      },
    },
  },
};
export const radioButton = recipe({
    base: {
      ...base
    },
    variants: variants,
  });
export type RadioButtonVariantProps = RecipeVariants<typeof radioButton>;

export const slider = style({
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    padding: '4px 7px',
    width: 50,
    borderRadius: 20,
    fontWeight: 600,
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .15)',
    color: vars.color.tertiary,
    '::before': {
        content: '',
        position: 'absolute',
        top: 2,
        left: 3,
        display: 'inline-block',
        width: 22,
        height: 22,
        background: vars.color.accent,
        color: vars.color.accent,
        boxShadow: '0 4px 3px rgba(0, 0, 0, .25)',
        borderRadius: '50%',
        transition: 'all .2s'
      },
    selectors: {
        '&.on::before': {
            left: 26
        }
    }
})

export const left = style({
    selectors: {
      [`${slider} &`]: {
        position: 'absolute',
        color: vars.color.accent,
        textAlign: 'left',
      },
    }
})
export const right = style({
    selectors: {
      [`${slider} &`]: {
        color: vars.color.tertiary,
        textAlign: 'right',
      },
    }
})
