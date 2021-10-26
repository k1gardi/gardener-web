import type {WeatherArray} from 'client/src/common/types';

export const mockWeather = () => {
  return Promise.resolve(([
    {
      high: "80",
      low: "60",
      icon: "assets/sunny.png",
      precip: "15%",
    },
    {
      high: "80",
      low: "60",
      icon: "assets/sunny.png",
      precip: "15%",
    },
    {
      high: "80",
      low: "60",
      icon: "assets/sunny.png",
      precip: "15%",
    },
    {
      high: "80",
      low: "60",
      icon: "assets/sunny.png",
      precip: "15%",
    },
    {
      high: "80",
      low: "60",
      icon: "assets/sunny.png",
      precip: "15%",
    },
  ]) as WeatherArray);
};
