import { DayTimeEnum } from "../../../ui/enum/dayTimeEnum";
import { NightTimeEnum } from "../../../ui/enum/nightTimeEnum";

export interface City {
  idCity: number;
  name: string;
}

export interface WeatherDataNameCity {
  idWheaterData: number;
  city: City;
  date: Date;
  dayTimeEnum: DayTimeEnum | null;
  nightTimeEnum: NightTimeEnum | null;
  maxTemperature: number;
  minTemperature: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

export interface WeatherData {
  idWheaterData: number;
  idCity: number;
  date: Date;
  dayTimeEnum: DayTimeEnum | null;
  nightTimeEnum: NightTimeEnum | null;
  maxTemperature: number;
  minTemperature: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
}
