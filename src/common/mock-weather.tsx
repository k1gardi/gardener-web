import type {WeatherArray} from './types';
import icon from '../assets/sunny.png';

export const mockWeather = () => {
  return Promise.resolve(([
    {
      day: "Monday",
      high: "80",
      low: "60",
      icon: icon,
      precip: "15%",
    },
    {
      day: "Tuesday",
      high: "80",
      low: "60",
      icon: icon,
      precip: "15%",
    },
    {
      day: "Wednesday",
      high: "80",
      low: "60",
      icon: icon,
      precip: "15%",
    },
    {
      day: "Thursday",
      high: "80",
      low: "60",
      icon: icon,
      precip: "15%",
    },
    {
      day: "Friday",
      high: "80",
      low: "60",
      icon: icon,
      precip: "15%",
    },
  ]) as WeatherArray);
};
