import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoItem } from "../TodoItem";

export function Todos() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id!}>
          <TodoItem title={item.title} isDone={item.isDone} item={item} />
        </div>
      ))}
    </div>
  );
}
