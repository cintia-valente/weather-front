import { render } from "@testing-library/react";
import { Home } from ".";

describe("Home Page", () => {
  test("deve renderizar a página Home", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Hoje")).toBeInTheDocument();
  });
});
