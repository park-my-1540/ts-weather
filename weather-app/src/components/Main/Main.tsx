import { useEffect, useState, useRef } from "react";
import Header  from "@/components/main/Header";
import Widget  from "@/components/main/Widget";
import Weather  from "@/components/main/Weather";
import { optionState } from '@/recoil/atoms/optionAtom';
import { baseStyle, themeVariants } from '@/styles/components/main.css';
import { useRecoilValue } from 'recoil';
import { fetchWeatherList } from "@/api/weatherApi";
import { WeatherItem } from "@/types/weather";
import { queryState } from "@/recoil/atoms/queryAtom";
import Loading from "@/components/Loading";

export default function Main() {
    const activeTheme = useRecoilValue(optionState); // 현재 테마 값 가져오기
    const query = useRecoilValue(queryState); // 현재 테마 값 가져오기
    const [items, setItems] = useState<WeatherItem[]>([]);
    const weatherRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    let timer;
    timer = clearTimeout;

    useEffect(() => {
      setIsLoading(true);
      fetchWeatherList(query.unit,query.city, query.lat, query.lon).then(({ items }) => {
        setItems(items);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setTimeout(()=> {
          setIsLoading(false);
        },200)
      })
    }, []);
    
    return (
    <div className={`${baseStyle} ${themeVariants[activeTheme.highlightColor]}`}>
        { isLoading && <Loading/> }
        <Header/>
        <Widget items={items} weatherRef={weatherRef}/>
        <Weather items={items} weatherRef={weatherRef}/>
    </div>
    );
  }
