import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";

export interface State {
  state: string;
}

export interface City {
  cityId: number;
  name: string;
}

const getState = async () => {
  try {
    const { data } = await Api().get("/states/all");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const getCityByState = async (selectedState: State["state"]) => {
  try {
    const { data } = await Api().get(`/city/${selectedState}/all-cities`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};

const post = () => {};
const updateById = () => {};
const deleteById = () => {};

export const OperationsService = {
  getState,
  getCityByState,
  post,
  updateById,
  deleteById,
};
