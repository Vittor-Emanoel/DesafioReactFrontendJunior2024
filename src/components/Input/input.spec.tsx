import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";
import { ChevronIcon } from "../../assets/icons/chevron";
import { TaskContext } from "../../contexts/TaskContext";
import { IconContainer } from "./styles";

describe("Input Component", () => {
  it("should render correctly with placeholder", () => {
    render(<Input placeholder="What needs to be done?" />);
    expect(
      screen.getByPlaceholderText("What needs to be done?")
    ).toBeInTheDocument();
  });

  it("should call handleAddItem function when form is submitted", () => {
    const handleAddItemMock = jest.fn();

    render(
      <TaskContext.Provider
        value={{
          tasks: [],
          totalOutstanding: 0,
          handleAddItem: handleAddItemMock,
          deleteTasks: jest.fn(),
          updatedItemHandler: jest.fn(),
          isClearCompleted: jest.fn(),
          handleToggleAllDone: jest.fn(),
        }}
      >
        <Input value="trabalhar" placeholder="What needs to be done?" />
      </TaskContext.Provider>
    );

    const inputElement = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(inputElement, { target: { value: "trabalhar" } });

    fireEvent.submit(inputElement);

    expect(handleAddItemMock).toHaveBeenCalledWith({
      id: expect.any(String),
      isDone: false,
      title: "trabalhar",
    });
  });

  test("should call handleToggleAllDone function when iconContainer is clicked", () => {
    const handleToggleAllDoneMock = jest.fn();

    render(
      <TaskContext.Provider
        value={{
          tasks: [],
          totalOutstanding: 0,
          handleAddItem: jest.fn(),
          deleteTasks: jest.fn(),
          updatedItemHandler: jest.fn(),
          isClearCompleted: jest.fn(),
          handleToggleAllDone: handleToggleAllDoneMock,
        }}
      >
        <IconContainer
          data-testid="icon-container"
          onClick={handleToggleAllDoneMock}
        >
          {<ChevronIcon />}
        </IconContainer>
      </TaskContext.Provider>
    );
    const iconContainer = screen.getByTestId("icon-container");

    fireEvent.click(iconContainer);

    expect(handleToggleAllDoneMock).toHaveBeenCalled();
  });
});
