import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Footer } from ".";
import { TaskContext } from "../../contexts/TaskContext";

const mockTaskContextValue = {
  isClearCompleted: jest.fn(),
  tasks: [],
  totalOutstanding: 5,
  handleAddItem: jest.fn(),
  deleteTasks: jest.fn(),
  updatedItemHandler: jest.fn(),
  handleToggleAllDone: jest.fn(),
};

describe("Footer component", () => {
  it("should render footer component correctly", () => {
    const wrapper = render(
      <TaskContext.Provider value={mockTaskContextValue}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </TaskContext.Provider>
    );

    expect(wrapper.getByTestId("filters")).toBeInTheDocument();
    expect(wrapper.getByTestId("summary")).toBeInTheDocument();
    expect(wrapper.getByText("Clear completed")).toBeInTheDocument();
  });

  it("should called isClearCompleted when Clear completed button is clicked", () => {
    const wrapper = render(
      <TaskContext.Provider value={mockTaskContextValue}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </TaskContext.Provider>
    );

    const clearCompletedButton = wrapper.getByRole("button", {
      name: "Clear completed",
    });

    fireEvent.click(clearCompletedButton);

    expect(mockTaskContextValue.isClearCompleted).toHaveBeenCalled();
  });
});
