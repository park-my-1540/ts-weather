// weatherApi.ts
import axios from "axios";
import { WeatherResponse } from "@/types/weather";
import { WEATHER_KEY } from "@/components/config";


const convertTime = (_sec: number): string => {
  const date = new Date(_sec * 1000);
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
};

export const fetchWeatherList = async (unit: string, city_name: string, lat: number, lon: number): Promise<WeatherResponse> => {
  const current_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${WEATHER_KEY}&units=${unit}`;
  const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=12&appid=${WEATHER_KEY}`;

  const [currentResponse, forecastResponse] = await Promise.all([
    axios.get(current_url),
    axios.get(forecast_url)
  ]);

  const currentData = currentResponse.data;
  const forecastData = forecastResponse.data;

  return {
    items: [
      {
        id: `${currentData.id}`,
        main: currentData.weather[0].main,
        temp: Math.round(currentData.main.temp),
        humidity: currentData.main.humidity,
        pressure: currentData.main.pressure,
        visibility: currentData.visibility,
        sunrise: convertTime(currentData.sys.sunrise),
        sunset: convertTime(currentData.sys.sunset),
        feels_like: Math.round(currentData.main.feels_like),
        wind_dir: currentData.wind.deg,
        wind_speed: currentData.wind.speed,
        cloud: currentData.clouds.all,
        forecastArray: forecastData,
      }
    ]
  };
};
