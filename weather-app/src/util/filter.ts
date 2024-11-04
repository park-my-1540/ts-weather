import { faSmog, faSun, faCloud, faCloudSun, faCloudSunRain, faWind } from '@fortawesome/free-solid-svg-icons'

export const convertTime = (_sec: number): string => {
    const date = new Date(_sec * 1000);
    return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
};
export const convertTo12HourFormat = (dateStr: number): string => {
  // Date 객체로 변환
  const date = new Date(dateStr);
  
  // 시간과 분을 12시간 형식으로 변환
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? "PM" : "AM";
  
  // 12시간 형식으로 시간 변환
  const formattedHours = (hours % 12) || 12;
  const formattedTime = `${period} ${formattedHours}:${minutes}`;
  
  return formattedTime;
};

export const setWeatherIcon = (props:string) => {
    let _icon;
    switch (props) {
      case "Clear":
        _icon = faCloudSun;
        break;
      case "Rain":
        _icon = faCloudSunRain;
        break;
      case "Clouds":
        _icon = faCloud;
        break;
      case "Smog":
        _icon = faSmog;
        break;
      case "Wind":
        _icon = faWind;
        break;
      default:
        _icon = faSun;
    }
    return _icon;
  };
