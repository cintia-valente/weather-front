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
  city: string
): Promise<WeatherData[] | ApiException> => {
  try {
    const { data } = await Api().get("/weather", { params: { q: city } });
    return data.list;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const updateById = () => {};

const deleteById = async (
  idWeather: number
): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/${idWeather}`);
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao apagar o registro.");
  }
};

export const OperationsService = {
  getCity,
  getWeather,
  getWeathersByCity,
  postWeather,
  updateById,
  deleteById,
};
