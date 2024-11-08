export interface WeatherItem {
    id: string;
    main: string;
    temp: number;
    humidity: number;
    pressure: number;
    visibility: number;
    sunrise: string;
    sunset: string;
    feels_like: number;
    wind_dir: number;
    wind_speed: number;
    cloud: number;
    forecastArray : ForecastArray;
  }

  interface ForecastArray {
    list: Weather[];
}

  interface Weather {
    weather: Array<{
        main: string;
        description: string; // 필요한 경우 다른 속성 추가
        icon: string;
    }>;
    dt_txt: number; // 날짜 및 시간 형식
}


  export interface WeatherResponse {
    items: WeatherItem[];
  }

  export interface WidgetProps {
    items: WeatherItem[];
    weatherRef: React.RefObject<HTMLDivElement>; // weatherRef 타입 지정
}

  export interface queryWeather {
    unit: string;
    city: string;
    lat: number;
    lon: number
}