export interface WeatherData {
  date: string;
  high: number;
  low: number;
  icon: number;
  precipitation: string;
}

export interface SensorData {
  sensorName: string;
  measurement: string;
  timeStamp: Date;
}

export type WeatherArray = WeatherData[];
