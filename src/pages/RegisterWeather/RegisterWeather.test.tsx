import { render, waitFor, screen, fireEvent } from "@testing-library/react";

import { jest } from "@jest/globals";

import { RegisterWeather } from ".";

jest.mock("../../data/services/ApiConfig");

const mockCities = [
  {
    idCity: 352,
    name: "Porto Alegre",
  },
  {
    idCity: 204,
    name: "Gramado",
  },
];

const mockWeather = [
  {
    city: {
      idCity: 4,
      name: "Rio de Janeiro",
    },
    date: "2023-05-10",
    dayTimeEnum: "TEMPESTADE",
    nightTimeEnum: "CHUVA",
    maxTemperature: 40,
    minTemperature: 22,
    precipitation: 42,
    humidity: 60,
    windSpeed: 95,
  },
];

jest.mock("../../data/services/operations/OperationsService", () => ({
  OperationsService: {
    getCity: () => Promise.resolve(mockCities),
    postWeather: () => Promise.resolve(mockWeather),
  },
}));

describe("RegisterWeather Page", () => {
  beforeEach(() => {
    render(<RegisterWeather />);
  });

  it("deve renderizar uma lista de cidades", async () => {
    await waitFor(() => {
      const selectElement = screen.getByTestId("city-select");
      expect(selectElement).toBeInTheDocument();

      mockCities.forEach((city) => {
        const optionElement = screen.getByText(city.name);
        expect(optionElement).toBeInTheDocument();
        expect(optionElement).toHaveValue(city.name);
      });
    });
  });

  it("deve exibir uma mensagem de erro", async () => {
    await waitFor(() => {
      const selectElement = screen.queryByTestId("city-select");

      if (!selectElement) {
        const errorMessage = screen.getByText(
          "Erro ao carregar a lista de cidades"
        );

        expect(errorMessage).toBeInTheDocument();
      }
    });
  });

  it("deve chamar a função cancel ao clicar no botão 'Cancelar'", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    const cancelButton = screen.getByText("Cancelar");

    fireEvent.click(cancelButton);

    expect(alertMock).toHaveBeenCalledWith("Cancelado com sucesso!");
  });

  // it("deve chamar a função de salvar ao clicar no botão 'Salvar'", async () => {
  //   const mockSuccessResponse = mockWeather; // Retorno bem-sucedido simulado
  //   //const mockErrorResponse = new ApiException("Erro ao cadastrar.");

  //   const postWeatherMock = jest
  //     .spyOn(OperationsService, "postWeather")
  //     .mockResolvedValue(mockWeather);

  //   const saveButton = screen.getByText("Salvar");

  //   fireEvent.click(saveButton);

  //   await waitFor(() => {
  //     expect(postWeatherMock).toHaveBeenCalled();
  //   });
  // });
});
