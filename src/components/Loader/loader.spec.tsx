import { render, screen } from "@testing-library/react";
import { Loader } from ".";

describe("Loader component", () => {
  it("should not render Loader component when isLoading is false", () => {
    render(<Loader isLoading={false} />);

    expect(screen.getByTestId("overlay")).not.toBeInTheDocument();
  });
});
