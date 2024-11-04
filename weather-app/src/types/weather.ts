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
    forecastArray : object[]
  }
  
  export interface WeatherResponse {
    items: WeatherItem[];
  }