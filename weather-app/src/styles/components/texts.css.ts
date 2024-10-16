import { vars } from '@/styles/common/createThemeContract.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css'

const base = {
    margin: '0',
}
const variants = {
  colors: {
    primary: style({
      color: vars.color.primary
    }),
    tertiary: style({
      color: vars.color.tertiary,
      padding: '5px 8px'
    }),
  },
  sizes: {
    small: style({
      fontSize: '12px',
    }),
    medium: style({
      fontSize: '16px',
    }),
    large: style({
      fontSize: '24px',
    }),
  },
  weights: {
    normal: style({
      fontWeight: 'normal',
    }),
    bold: style({
      fontWeight: 'bold',
    }),
  }
};

export const text = recipe({
    base: {
      ...base
    },
    variants: variants,
    defaultVariants: {
      colors: 'primary',
      sizes: 'small',
      weights: 'normal',
    },
  });

export type TextVariantProps = RecipeVariants<typeof text>;