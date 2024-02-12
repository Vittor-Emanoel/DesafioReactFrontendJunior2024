import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TaskContext } from "../../contexts/TaskContext";
import { FiltersButton, FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  const { isClearCompleted, totalOutstanding } = useContext(TaskContext);
  const [activeFilter, setActiveFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const todosParam = searchParams.get("todos");
    if (todosParam) {
      setActiveFilter(todosParam);
    }
  }, [searchParams]);

  function handleFilterTodos(param: "all" | "active" | "completed") {
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
            $isActive={activeFilter === "all"}
            onClick={() => handleFilterTodos("all")}
          >
            All
          </FiltersButton>
        </li>
        <li>
          <FiltersButton
            $isActive={activeFilter === "active"}
            onClick={() => handleFilterTodos("active")}
          >
            Active
          </FiltersButton>
        </li>
        <li>
          <FiltersButton
            $isActive={activeFilter === "completed"}
            onClick={() => handleFilterTodos("completed")}
          >
            Completed
          </FiltersButton>
        </li>
      </ul>

      <button onClick={isClearCompleted}>Clear completed</button>
    </FooterContainer>
  );
}
