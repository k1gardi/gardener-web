import type {WeatherArray} from './types';
import icon from '../assets/sunny.png';

export const mockWeather = () => {
  return Promise.resolve(([
    {
      date: "Monday",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "Tuesday",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "Wednesday",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "Thursday",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "Friday",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
  ]) as WeatherArray);
};
