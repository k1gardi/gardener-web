export interface WeatherData {
  date: string;
  high: string;
  low: string;
  icon: string;
  precipitation: string;
}

export interface SensorData {
  sensorName: string;
  measurement: string;
	timeStamp: Date;
}

export type WeatherArray = WeatherData[];
