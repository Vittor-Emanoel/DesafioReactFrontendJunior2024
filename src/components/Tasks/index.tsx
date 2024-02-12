import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TaskItem } from "../TaskItem";

export function Tasks() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id!}>
          <TaskItem item={item} />
        </div>
      ))}
    </div>
  );
}
