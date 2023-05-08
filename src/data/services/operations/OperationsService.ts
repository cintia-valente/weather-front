import { DayTimeEnum } from "../../../ui/enum/dayTimeEnum";
import { NightTimeEnum } from "../../../ui/enum/nightTimeEnum";
import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";

export interface WheaterData {
  city: City;
  date: Date;
  dayTimeEnum: DayTimeEnum;
  nightTimeEnum: NightTimeEnum;
  maxTemperature: number;
  minTemperature: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

export interface City {
  idCity: number;
  name: string;
}

const getCity = async () => {
  try {
    const { data } = await Api().get("/cities/all");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const postWheater = async (payload: WheaterData) => {
  try {
    const { data } = await Api().post("/register", payload);
    console.log(data);
  } catch (error: any) {
    console.error(error.message || "Erro ao fazer cadastrar.");
  }
};

// const getCityByState = async (selectedState: WheaterData["state"]) => {
//   try {
//     const { data } = await Api().get(`/city/${selectedState}/all-cities`);
//     return data;
//   } catch (error: any) {
//     return new ApiException(error.message || "Erro ao consultar a API.");
//   }
// };

const updateById = () => {};
const deleteById = () => {};

export const OperationsService = {
  getCity,
  //  getCityByState,
  postWheater,
  updateById,
  deleteById,
};
