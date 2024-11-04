import { useEffect, useState, useRef } from "react";
import Header  from "@/components/main/Header";
import Widget  from "@/components/main/Widget";
import Weather  from "@/components/main/Weather";
import { optionState } from '@/recoil/atoms/optionAtom';
import { baseStyle, themeVariants } from '@/styles/components/main.css';
import { useRecoilValue } from 'recoil';
import { fetchWeatherList } from "@/api/weatherApi";
import { WeatherItem } from "@/types/weather";

export default function Main() {
    const activeTheme = useRecoilValue(optionState); // 현재 테마 값 가져오기
    const [items, setItems] = useState<WeatherItem[]>([]);
    const weatherRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      fetchWeatherList("metric", "Seoul", 126, 36).then(({ items }) => {
        setItems(items);
      });
    }, []);
    return (
    <div className={`${baseStyle} ${themeVariants[activeTheme.highlightColor]}`}>
        <Header/>
        <Widget items={items} weatherRef={weatherRef}/>
        <Weather items={items} weatherRef={weatherRef}/>
    </div>
    );
  }
