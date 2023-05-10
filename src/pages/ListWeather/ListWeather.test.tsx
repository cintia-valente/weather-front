import { render, screen } from "@testing-library/react";
import { ListWeather } from ".";

describe("ListWeather Page", () => {
  it("deve renderizar a página ListWeather", () => {
    render(<ListWeather />);

    expect(screen.getByText("Lista de cidades")).toBeInTheDocument();
  });
});
