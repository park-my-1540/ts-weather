import { atom } from 'recoil';

// 초기값 설정
const mainState = atom({
  key: 'mainState', // 고유 key
  default: false,
});

export default mainState;
