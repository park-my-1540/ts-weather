import { atom } from 'recoil';
import { WeatherItem } from "@/types/weather";

// 초기값 설정
export const weatherItemsState = atom<WeatherItem[]>({
  key: 'weatherItemsState', // 고유 키
  default: [], // 초기 값
});