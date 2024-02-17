import { FiltersButton } from "./styles";

export function Filters() {
  return (
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
  );
}
