import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { TaskItem } from "../TaskItem";

export function Tasks() {
  const { todos } = useContext(TaskContext);

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
