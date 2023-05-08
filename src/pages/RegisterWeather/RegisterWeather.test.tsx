import { render } from "@testing-library/react";
import { RegisterWeather } from ".";

describe("RegisterWeather Page", () => {
  test("deve renderizar a página RegisterWeather", () => {
    const { getByText } = render(<RegisterWeather />);

    expect(getByText("Cadastro Metereológico")).toBeInTheDocument();
  });
});
