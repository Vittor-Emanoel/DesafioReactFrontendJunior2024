import React, { createContext, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ITodo } from "../entities/Todo";
import { todosService } from "../services/todos";

interface TodoProviderValue {
  todos: ITodo[];
  totalOutstanding: number;
  handleAddItem: (data: ITodo) => void;
  isClearAllTodos: () => void;
  deleteItem: (id: string) => void;
  updatedItemHandler: (data: ITodo) => void;
  isClearCompleted: () => void;
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

  function updatedItemHandler(data: ITodo) {
    const updatedTodos = todos.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          title: data.title,
          isDone: data.isDone,
        };
      }

      return item;
    });

    setTodos(updatedTodos);
  }

  function handleAddItem(item: ITodo) {
    setTodos([item, ...todos]);
  }

  function isClearAllTodos() {
    setTodos([]);
  }

  function isClearCompleted() {
    setTodos(todos.filter((item) => item.isDone !== true));
  }

  function deleteItem(itemId: string) {
    setTodos(todos.filter((item) => item.id !== itemId));
  }

  const totalOutstanding = todos.reduce((acc, value) => {
    if (!value.isDone) {
      return acc + 1;
    }
    return acc;
  }, 0);

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
        isClearAllTodos,
        deleteItem,
        updatedItemHandler,
        totalOutstanding,
        isClearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
