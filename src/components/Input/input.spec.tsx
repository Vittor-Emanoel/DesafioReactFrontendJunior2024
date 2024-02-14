import { render } from "@testing-library/react";
import { Input } from ".";

describe("Input Component", () => {
  it("should render correctly with placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="testando 1,2,3" />
    );
    expect(getByPlaceholderText("testando 1,2,3")).toBeInTheDocument();
  });
});
