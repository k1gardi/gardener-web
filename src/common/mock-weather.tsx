import type {WeatherArray} from './types';
import icon from '../assets/sunny.png';

export const mockWeather = () => {
  return Promise.resolve(([
    {
      date: "2021-11-15",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "2021-11-16",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "2021-11-17",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "2021-11-18",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
    {
      date: "2021-11-19",
      high: "80",
      low: "60",
      icon: icon,
      precipitation: "15%",
    },
  ]) as WeatherArray);
};
