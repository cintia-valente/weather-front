import { render, waitFor, screen } from "@testing-library/react";

import axios, { AxiosInstance } from "axios";
import { jest } from "@jest/globals";

import { OperationsService } from "../../data/services/operations/OperationsService";
import { RegisterWeather } from ".";
import { Api } from "../../data/services/ApiConfig";
import { ApiException } from "../../data/services/ErrorException";
jest.mock("../../data/services/ApiConfig");

const mockData = [
  {
    idCity: 352,
    name: "Porto Alegre",
  },
  {
    idCity: 204,
    name: "Gramado",
  },
];
describe("RegisterWeather Page", () => {
  const apiMock = jest.fn();
  const getCityMock = jest.fn();
  beforeAll(() => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: mockData });
    apiMock.mockReturnValue({ get: getCityMock });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("deve renderizar a página RegisterWeather", () => {
    render(<RegisterWeather />);

    expect(screen.getByText("Cadastro Metereológico")).toBeInTheDocument();
  });
});
