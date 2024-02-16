import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "../CheckBox";

describe("Task Item component", () => {
  it("should mark the input box with a check if the checked option is true", () => {
    const handleCheckedMock = jest.fn();

    const wrapper = render(
      <div onClick={handleCheckedMock} data-testid="div-checkbox">
        <Checkbox checked={true} onChange={handleCheckedMock} />
      </div>
    );

    const container = wrapper.getByTestId("div-checkbox");

    userEvent.click(container);

    const checkbox = wrapper.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });
});
