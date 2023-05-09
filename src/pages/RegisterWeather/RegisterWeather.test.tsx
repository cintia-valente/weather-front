import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RegisterWeather } from ".";
import axios from "axios";
import { jest } from "@jest/globals";
import { OperationsService } from "../../data/services/operations/OperationsService";

declare module "axios" {
  interface AxiosStatic {
    mockResolvedValue<T>(value: AxiosResponse<T>): void;
  }
}

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

jest.mock("OperationsService", () => ({
  getCity: jest.fn(() => Promise.resolve(mockData)),
}));

jest.mock("axios");

// const mockGetCity = jest.fn(() => Promise.resolve(mockData));

// jest.mock("OperationsService", () => ({
//   getCity: mockGetCity,
// }));

(axios.get as jest.Mock).mockResolvedValue({ data: mockData });

describe("RegisterWeather Page", () => {
  beforeEach(() => {});

  it("deve renderizar a página RegisterWeather", () => {
    render(<RegisterWeather />);

    expect(screen.getByText("Cadastro Metereológico")).toBeInTheDocument();
  });

  it("deve renderizar uma lista de cidades", async () => {
    render(<RegisterWeather />);

    await waitFor(() => {
      expect(OperationsService.getCity).toHaveBeenCalled();
    });

    // Select the São Paulo option
    const select = screen.getByTestId("city-select");
    userEvent.selectOptions(select, "Gramado");

    // Verify that the São Paulo option is selected
    expect(screen.getByText("Gramado")).toBeInTheDocument();
  });
});
