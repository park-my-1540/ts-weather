import { useEffect, useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '@/components/Main/Header';
import Widget from '@/components/Main/Widget';
import Weather from '@/components/Main/Weather';
import { optionState } from '@/recoil/atoms/optionAtom';
import { baseStyle, themeVariants } from '@/styles/components/main.css';
import fetchWeatherList from '@/api/weatherApi';
import { WeatherItem } from '@/types/weather';
import queryState from '@/recoil/atoms/queryAtom';
import Loading from '@/components/Loading';

export default function Main() {
  const activeTheme = useRecoilValue(optionState); // 현재 테마 값 가져오기
  const query = useRecoilValue(queryState); // 현재 테마 값 가져오기
  const [items, setItems] = useState<WeatherItem[]>([]);
  const weatherRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchWeatherList({
      unit: query.unit,
      city: query.city,
      lat: query.lat,
      lon: query.lon,
    })
      .then(({ items }) => {
        setItems(items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      });
  }, []);

  return (
    <div
      className={`${baseStyle} ${themeVariants[activeTheme.highlightColor]}`}
    >
      {isLoading && <Loading />}
      <Header />
      <Widget items={items} weatherRef={weatherRef} />
      <Weather items={items} weatherRef={weatherRef} />
    </div>
  );
}
