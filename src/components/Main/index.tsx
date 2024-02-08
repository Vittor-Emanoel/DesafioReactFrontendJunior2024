import { todosService } from "../../services/todos";
import { TodoItem } from "../TodoItem";

export function Main() {
  const result = todosService.getAll();

  console.log(result);

  return (
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
