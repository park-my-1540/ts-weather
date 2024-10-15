import { styleVariants } from '@vanilla-extract/css'
import { theme } from './theme.css';

// widthSize에 따라 동적으로 변경되는 스타일
export const styleWidth = styleVariants(theme.widthSize, (width) => ({
    width,
  }));
  
// color에 따라 동적으로 변경되는 스타일
export const styleColor = styleVariants(theme.color, (color) => ({
    color,
}));

// bgcolor에 따라 동적으로 변경되는 스타일
export const styleBgColor = styleVariants(theme.theme, (background) => ({
    background,
}));

// fontSize에 따라 동적으로 변경되는 스타일
export const styleFontSize = styleVariants(theme.fontSize, (fontSize) => ({
    fontSize,
}));

