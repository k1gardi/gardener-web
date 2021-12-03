import type {WeatherArray} from "./types";

export const mockWeather = () => {
  return Promise.resolve([
    {
      date: "2021-11-15",
      high: 80,
      low: 60,
      icon: 1,
      precipitation: "15%",
    },
    {
      date: "2021-11-16",
      high: 80,
      low: 60,
      icon: 1,
      precipitation: "15%",
    },
    {
      date: "2021-11-17",
      high: 80,
      low: 60,
      icon: 1,
      precipitation: "15%",
    },
    {
      date: "2021-11-18",
      high: 80,
      low: 60,
      icon: 1,
      precipitation: "15%",
    },
    {
      date: "2021-11-19",
      high: 80,
      low: 60,
      icon: 1,
      precipitation: "15%",
    },
  ] as WeatherArray);
};
