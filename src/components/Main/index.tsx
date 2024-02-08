import { useCallback, useEffect, useState } from "react";
import { ITodo } from "../../entities/Todo";
import { todosService } from "../../services/todos";
import { TodoItem } from "../TodoItem";

export function Main() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const loadTodos = useCallback(async () => {
    try {
      const result = await todosService.getAll();
      setTodos(result);
    } catch (error) {
      alert("deu ruim parceiro!!");
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id!}>
          <TodoItem title={item.title} isDone={item.isDone} />
        </div>
      ))}
    </div>
  );
}
