import { render } from "@testing-library/react";
import { ListWeather } from ".";

describe("ListWeather Page", () => {
  test("deve renderizar a página ListWeather", () => {
    const { getByText } = render(<ListWeather />);

    expect(getByText("Lista de cidades")).toBeInTheDocument();
  });
});
