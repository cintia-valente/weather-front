import { DayTimeEnum } from "../../../ui/enum/dayTimeEnum";
import { NightTimeEnum } from "../../../ui/enum/nightTimeEnum";
import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";

export interface City {
  idCity: number;
  name: string;
}

export interface WheaterData {
  idWheaterData: number;
  city: City[];
  date: Date;
  dayTimeEnum: DayTimeEnum;
  nightTimeEnum: NightTimeEnum;
  maxTemperature: number;
  minTemperature: number;
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

const getCity = async () => {
  try {
    const { data } = await Api().get("/cities/all");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const postWheater = async (
  payload: Omit<WheaterData, "idWheaterData">
): Promise<WheaterData | ApiException> => {
  try {
    const { data } = await Api().post("/register", payload);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao cadastrar.");
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
