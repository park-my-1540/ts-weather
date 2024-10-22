// styles.css.ts (Vanilla Extract)
import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/styles/common/theme.css';

// 기본 스타일 정의
export const baseStyle = style({
  height: '100%',
  transition: 'background 0.3s ease-in-out',
});

// 배경 테마에 따라 스타일 분리
export const themeVariants = styleVariants({
  lime: { background: theme.theme.lime },
  green: { background: theme.theme.green },
  blue: { background: theme.theme.blue },
  purple: { background: theme.theme.purple },
});

export const mainInfo = style([
    {
        position: 'relative',
        width: '100%',
        height: 70,
        textAlign: 'center',
    }
  ]);

export const settingMenuIcon = style({
        margin: 'auto',
        width: 34,
        height: 20,
})

export const settingMenuSpan = style({
    selectors: {
        [`${settingMenuIcon} &`]: {
            display: 'block',
            width: '100%',
            height: '3px',
            marginBottom: '6px',
            background: theme.color.white,
        }
    }
})

export const menuWidget = style({

})
