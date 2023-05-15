import { DayTimeEnum } from "../../../ui/enum/dayTimeEnum";
import { NightTimeEnum } from "../../../ui/enum/nightTimeEnum";

export interface City {
  idCity: number;
  name: string;
}

export interface WeatherData {
  idWeatherData?: number;
  city: City;
  date: Date;
  dayTimeEnum: string;
  nightTimeEnum: string;
  maxTemperature: number;
  minTemperature: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
}
