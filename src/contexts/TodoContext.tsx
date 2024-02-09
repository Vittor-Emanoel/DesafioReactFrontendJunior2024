import React, { createContext, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ITodo } from "../entities/Todo";
import { todosService } from "../services/todos";

interface TodoProviderValue {
  todos: ITodo[];
  handleAddItem: (data: ITodo) => void;
  deleteAllTodos: () => void;
  deleteItem: (id: string) => void;
  handleUpdateItem: (data: ITodo) => ITodo;
}

export const TodoContext = createContext({} as TodoProviderValue);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("todos");

  const loadTodos = useCallback(async () => {
    try {
      const result = await todosService.getAll();
      const filteredTodos = applyFilter(result, filter);

      setTodos(filteredTodos);
    } catch (error) {
      alert("deu ruim parceiro!!");
    }
  }, [filter]);

  function handleUpdateItem(data: ITodo) {
    return todos.map((item) => item.id === data.id)
      ? {
          ...data,
          title: data.title,
          isDone: data.isDone,
        }
      : data;
  }

  function handleAddItem(data: ITodo) {
    setTodos([data, ...todos]);
  }

  const deleteAllTodos = useCallback(() => {
    setTodos([]);
  }, []);

  function deleteItem(id: string) {
    const removeItem = todos.filter((item) => item.id !== id);
    setTodos([...removeItem]);
  }

  const applyFilter = (todos: ITodo[], filter: string | null): ITodo[] => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.isDone);
      case "completed":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  };

  useEffect(() => {
    loadTodos();
  }, [filter, loadTodos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleAddItem,
        deleteAllTodos,
        deleteItem,
        handleUpdateItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
