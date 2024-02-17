import { render } from "@testing-library/react";
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

  // it("calls isClearCompleted when 'Clear completed' button is clicked", () => {
  //   // Renderiza o componente Footer com o contexto mockado
  //   const { getByText } = render(
  //     <TaskContext.Provider value={mockTaskContextValue}>
  //       <Footer />
  //     </TaskContext.Provider>
  //   );

  //   // Simula o clique no botão "Clear completed"
  //   fireEvent.click(getByText("Clear completed"));

  //   // Verifica se a função isClearCompleted foi chamada
  //   expect(mockTaskContextValue.isClearCompleted).toHaveBeenCalledTimes(1);
  // });
});
