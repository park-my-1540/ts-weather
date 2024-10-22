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
    accent: style({
      color: vars.color.accent,
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
    largeX2: style({
      fontSize: '40px'
    }),
    big: style({
      fontSize: '100px',
      lineHeight: '100px'
    }),
  },
  weights: {
    normal: style({
      fontWeight: 'normal',
    }),
    bold: style({
      fontWeight: 'bold',
    }),
  },
  display: {
    inlineBlock: style({
      display: 'inline-block'
    })
  },
  vertical: {
    textTop: style({
      verticalAlign:'text-Top',
    }),
  },
  textAlign: {
    center: style({
      textAlign:'center',
    }),
  },
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