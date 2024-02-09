import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TodoContext } from "../../contexts/TodoContext";
import { FiltersButton, FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  const { isClearCompleted, totalOutstanding } = useContext(TodoContext);
  const [activeFilter, setActiveFilter] = useState("");

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
    setActiveFilter(param);
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
          <FiltersButton
            active={activeFilter === "all"}
            onClick={() => handleFilterTodos({ param: "all" })}
          >
            All
          </FiltersButton>
        </li>
        <li>
          <FiltersButton
            active={activeFilter === "active"}
            onClick={() => handleFilterTodos({ param: "active" })}
          >
            Active
          </FiltersButton>
        </li>
        <li>
          <FiltersButton
            active={activeFilter === "completed"}
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
