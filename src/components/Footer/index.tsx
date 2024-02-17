import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Filters } from "../Filters";
import { FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  const { isClearCompleted, totalOutstanding } = useContext(TaskContext);

  return (
    <FooterContainer>
      <SummaryTodos>
        <span>
          {totalOutstanding > 1
            ? `${totalOutstanding} items left!`
            : `${totalOutstanding} item left!`}
        </span>
      </SummaryTodos>

      <Filters />

      <button onClick={isClearCompleted}>Clear completed</button>
    </FooterContainer>
  );
}
