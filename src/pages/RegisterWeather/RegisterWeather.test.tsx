import { render, waitFor, screen } from "@testing-library/react";

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

jest.mock("../../data/services/operations/OperationsService", () => ({
  OperationsService: {
    getCity: () => Promise.resolve(mockCities),
  },
}));

describe("RegisterWeather Page", () => {
  it("deve renderizar a página RegisterWeather", () => {
    render(<RegisterWeather />);

    expect(screen.getByText("Cadastro Metereológico")).toBeInTheDocument();
  });

  it("deve renderizar uma lista de cidades", async () => {
    render(<RegisterWeather />);

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
});
