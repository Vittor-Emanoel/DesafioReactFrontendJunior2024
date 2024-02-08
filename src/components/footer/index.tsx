import { useSearchParams } from "react-router-dom";
import { FiltersButton, FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  const [searchParams, setSearchParams] = useSearchParams();

  interface Filters {
    param: "all" | "isDone" | "completed";
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
        <span>1 item left!</span>
      </SummaryTodos>

      <ul>
        <li>
          <FiltersButton onClick={() => handleFilterTodos({ param: "all" })}>
            All
          </FiltersButton>
        </li>
        <li>
          <FiltersButton onClick={() => handleFilterTodos({ param: "isDone" })}>
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

      <button>Clear completed</button>
    </FooterContainer>
  );
}
