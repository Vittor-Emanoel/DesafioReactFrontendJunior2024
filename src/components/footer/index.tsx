import { FiltersButton, FooterContainer, SummaryTodos } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <SummaryTodos>
        <span>1 item left!</span>
      </SummaryTodos>

      <ul>
        <li>
          <FiltersButton>All</FiltersButton>
        </li>
        <li>
          <FiltersButton>Active</FiltersButton>
        </li>
        <li>
          <FiltersButton>Completed</FiltersButton>
        </li>
      </ul>

      <button>Clear completed</button>
    </FooterContainer>
  );
}
