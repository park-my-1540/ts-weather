import { atom } from 'recoil';

type searchType = object[];
// 초기값 설정
const localStorageState = atom<searchType>({
  key: 'localStorageState', // 고유 key
  default: [],
});

export default localStorageState;
