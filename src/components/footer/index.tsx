import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TodoContext } from "../../contexts/TodoContext";
import { FiltersButton, FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  const { isClearCompleted, totalOutstanding } = useContext(TodoContext);

  const [, setSearchParams] = useSearchParams();

  interface Filters {
    param: "all" | "active" | "completed";
  }

  function handleFilterTodos({ param }: Filters) {
    setSearchParams((state) => {
      if (param) {
        state.set("todos", param);
      } else {
        state.delete("todos");
      }
      return state;
    });
  }

  return (
    <FooterContainer>
      <SummaryTodos>
        <span>
          {totalOutstanding > 1
            ? `${totalOutstanding} items left!`
            : `${totalOutstanding} item left!`}
        </span>
      </SummaryTodos>

      <ul>
        <li>
          <FiltersButton onClick={() => handleFilterTodos({ param: "all" })}>
            All
          </FiltersButton>
        </li>
        <li>
          <FiltersButton onClick={() => handleFilterTodos({ param: "active" })}>
            Active
          </FiltersButton>
        </li>
        <li>
          <FiltersButton
            onClick={() => handleFilterTodos({ param: "completed" })}
          >
            Completed
          </FiltersButton>
        </li>
      </ul>

      <button onClick={isClearCompleted}>Clear completed</button>
    </FooterContainer>
  );
}
