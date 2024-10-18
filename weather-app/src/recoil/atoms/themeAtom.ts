// /recoil/atoms/themeAtom.ts
import { atom } from 'recoil';
import { ThemeColor } from "@/types/styles"

// Recoil atom 생성
// 모드와 하이라이트 색상 타입 정의
export type ThemeMode = 'light' | 'dark';
export type HighlightColor = ThemeColor;

export type ThemeState = {
  mode: ThemeMode;
  highlightColor: ThemeColor;
};
  
// 초기값 설정
export const themeState = atom<ThemeState>({
  key: 'themeState', // 고유 key
  default: {
    mode: 'light',        // 초기 모드는 라이트
    highlightColor: 'blue', // 초기 색상은 블루
  },
});