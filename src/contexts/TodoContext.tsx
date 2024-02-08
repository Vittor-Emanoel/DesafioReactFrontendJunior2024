import React, { createContext, useCallback, useEffect, useState } from "react";
import { ITodo } from "../entities/Todo";
import { todosService } from "../services/todos";

interface TodoProviderValue {
  todos: ITodo[];
}

export const TodoContext = createContext({} as TodoProviderValue);

export function TodoProvider({ children }: { children: React.ReactNode }) {
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
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
}
