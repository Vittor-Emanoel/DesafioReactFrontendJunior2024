import React, { createContext, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ITodo } from "../entities/Todo";
import { todosService } from "../services/todos";

interface TodoProviderValue {
  todos: ITodo[];
  handleAddTodo: (data: ITodo) => void;
}

export const TodoContext = createContext({} as TodoProviderValue);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("todos");

  const loadTodos = useCallback(async () => {
    try {
      const result = await todosService.getAll();
      setTodos(result);
    } catch (error) {
      alert("deu ruim parceiro!!");
    }
  }, []);

  function handleAddTodo(data: ITodo) {
    setTodos([data, ...todos]);
  }

  // const addNewTodo = useCallback(
  //   (data: ITodo[]) => {
  //     setTodos([...todos, ...data]);
  //   },
  //   [todos]
  // );

  const deleteAllTodos = useCallback(() => {
    setTodos([]);
  }, []);

  useEffect(() => {
    loadTodos();
  }, [filter, loadTodos]);

  return (
    <TodoContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
