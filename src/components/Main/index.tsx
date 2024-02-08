import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoItem } from "../TodoItem";

export function Main() {
  const { todos } = useContext(TodoContext);

  console.log(todos);

  return (
    <div>
      {!todos
        ? "oi"
        : todos.map((item) => (
            <div key={item.id!}>
              <TodoItem title={item.title} isDone={item.isDone} />
            </div>
          ))}
    </div>
  );
}
