import { atom } from 'recoil';

// 초기값 설정
export const mainState = atom({
  key: 'mainState', // 고유 key
  default: false,
});
