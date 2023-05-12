import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";
import { WeatherData } from "../interfaces";

const getCity = async () => {
  try {
    const { data } = await Api().get("/cities/all");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const getWeather = async () => {
  try {
    const { data } = await Api().get("/list-all");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const postWeather = async (
  payload: WeatherData
): Promise<WeatherData | ApiException> => {
  try {
    const { data } = await Api().post("/register", payload);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao cadastrar.");
  }
};

const getWeathersByCity = async (
  cityId: number
): Promise<WeatherData[] | ApiException> => {
  try {
    const { data } = await Api().get(`/weather/${cityId}/list-all`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const updateById = () => {};
const deleteById = () => {};

export const OperationsService = {
  getCity,
  getWeather,
  //  getCityByState,
  getWeathersByCity,
  postWeather,
  updateById,
  deleteById,
};
