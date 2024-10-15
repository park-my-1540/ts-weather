import { theme } from '@/styles/theme.css';

export type Theme = typeof theme;
export type WidthSize = keyof Theme['widthSize']; //default, medium
export type FontSize = keyof Theme['fontSize'];
export type ThemeColor = keyof Theme['theme'];
export type Color = keyof Theme['color'];