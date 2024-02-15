import { useCallback, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TaskContext } from "../../contexts/TaskContext";
import { FilterType } from "../../types/filterType";
import { FiltersButton, FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  const { isClearCompleted, totalOutstanding } = useContext(TaskContext);
  const [activeFilter, setActiveFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterTasks = useCallback(
    (param: FilterType) => {
      setSearchParams((state) => {
        if (param) {
          state.set("todos", param);
        } else {
          state.delete("todos");
        }
        return state;
      });
      setActiveFilter(param);
    },
    [setSearchParams, setActiveFilter]
  );

  useEffect(() => {
    const params = searchParams.get("todos");
    if (!params) {
      handleFilterTasks("all");
    } else {
      setActiveFilter(params);
    }
  }, [searchParams, handleFilterTasks]);

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
            onClick={() => handleFilterTasks("all")}
          >
            All
          </FiltersButton>
        </li>
        <li>
          <FiltersButton
            $isActive={activeFilter === "active"}
            onClick={() => handleFilterTasks("active")}
          >
            Active
          </FiltersButton>
        </li>
        <li>
          <FiltersButton
            $isActive={activeFilter === "completed"}
            onClick={() => handleFilterTasks("completed")}
          >
            Completed
          </FiltersButton>
        </li>
      </ul>

      <button onClick={isClearCompleted}>Clear completed</button>
    </FooterContainer>
  );
}
