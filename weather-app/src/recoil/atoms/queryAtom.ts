import { atom } from 'recoil';
import { queryWeather } from "@/types/weather";

// 초기값 설정
export const queryState = atom<queryWeather>({
  key: 'queryState', // 고유 키
  default: {
    unit : "metric",
    city : "Sokcho",
    lon : 128.59111,
    lat : 38.208328,
  },
});