import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
  it("should render header component correctly", () => {
    const { getByText } = render(<Header />);

    expect(getByText("todos")).toBeInTheDocument();
  });
});
