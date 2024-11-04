// weatherActions.ts
import { useSetRecoilState } from 'recoil';
import { weatherItemsState } from '@/recoil/atoms/weatherAtom'; // 방금 만든 atom import
import { fetchWeatherList } from '@/api/weatherApi'; // fetchWeatherList 함수 import

export const useUpdateWeatherItems = () => {
  const setItems = useSetRecoilState(weatherItemsState);

  const updateWeatherItems = async (metric: string, cityName: string, lon: number, lat: number) => {
    const { items } = await fetchWeatherList(metric, cityName, lon, lat);
    setItems(items);
  };

  return { updateWeatherItems };
};
