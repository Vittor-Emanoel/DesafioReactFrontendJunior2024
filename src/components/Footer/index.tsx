import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TaskContext } from "../../contexts/TaskContext";
import { FiltersButton, FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  const { isClearCompleted, totalOutstanding } = useContext(TaskContext);
  const [activeFilter, setActiveFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

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
          <FiltersButton to={"all"}>All</FiltersButton>
        </li>
        <li>
          <FiltersButton to={"active"}>Active</FiltersButton>
        </li>
        <li>
          <FiltersButton to={"completed"}>Completed</FiltersButton>
        </li>
      </ul>

      <button onClick={isClearCompleted}>Clear completed</button>
    </FooterContainer>
  );
}
