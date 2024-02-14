import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";
import { TaskContext } from "../../contexts/TaskContext";

describe("Input Component", () => {
  it("should render correctly with placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="What needs to be done?" />
    );
    expect(getByPlaceholderText("What needs to be done?")).toBeInTheDocument();
  });

  it("should called handleAddItem function when form is submitted", () => {
    const handleAddItemMock = jest.fn();

    render(
      <TaskContext.Provider
        value={{
          tasks: [],
          totalOutstanding: 0,
          handleAddItem: handleAddItemMock,
          isClearAllTodos: jest.fn(),
          deleteItem: jest.fn(),
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

    fireEvent.submit(screen.getByPlaceholderText("What needs to be done?"));

    expect(handleAddItemMock).toHaveBeenCalledWith({
      id: expect.any(String),
      isDone: false,
      title: "trabalhar",
    });
  });
});
