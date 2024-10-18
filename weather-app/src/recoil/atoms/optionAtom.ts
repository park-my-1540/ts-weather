import { atom } from 'recoil';
import { OptionType } from "@/types/styles"
import { ThemeColor } from "@/types/styles"

export type ThemeMode = 'light' | 'dark';
export type HighlightColor = ThemeColor;

// 초기값 설정
export const optionState = atom<OptionType>({
  key: 'optionState', // 고유 key
  default: {
    unit : true,
    sun : true,
    atmo : false,
    wind : true,
    dark : true,
    mode: 'light',        // 초기 모드는 라이트
    highlightColor: 'blue', // 초기 색상은 블루
  },
});