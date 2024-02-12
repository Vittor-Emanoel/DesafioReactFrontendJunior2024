import React, { createContext, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ITask } from "../entities/Task";
import { tasksService } from "../services/tasks";

interface TaskProviderValue {
  todos: ITask[];
  totalOutstanding: number;
  handleAddItem: (data: ITask) => void;
  isClearAllTodos: () => void;
  deleteItem: (id: string) => void;
  updatedItemHandler: (data: ITask) => void;
  isClearCompleted: () => void;
  handleToggleAllDone: () => void;
}

export const TaskContext = createContext({} as TaskProviderValue);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("todos");

  const loadTasks = useCallback(async () => {
    try {
      const result = await tasksService.getAll();
      const filteredTodos = applyFilter(result, filter);
      setTasks(filteredTodos);
    } catch (error) {
      alert("deu ruim parceiro!!");
    }
  }, [filter]);

  function updatedItemHandler(data: ITask) {
    const updatedTodos = tasks.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          title: data.title,
          isDone: data.isDone,
        };
      }

      return item;
    });

    setTasks(updatedTodos);
  }

  function handleAddItem(item: ITask) {
    setTasks([item, ...tasks]);
  }

  function isClearAllTodos() {
    setTasks([]);
  }

  function handleToggleAllDone() {
    return setTasks(
      tasks.map((item) => ({
        ...item,
        isDone: true,
      }))
    );
  }

  function isClearCompleted() {
    setTasks(tasks.filter((item) => item.isDone !== true));
  }

  function deleteItem(itemId: string) {
    setTasks(tasks.filter((item) => item.id !== itemId));
  }

  const totalOutstanding = tasks.reduce((acc, value) => {
    if (!value.isDone) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const applyFilter = (todos: ITask[], filter: string | null): ITask[] => {
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
    loadTasks();
  }, [filter, loadTasks]);

  return (
    <TaskContext.Provider
      value={{
        todos: tasks,
        deleteItem,
        handleAddItem,
        isClearAllTodos,
        totalOutstanding,
        isClearCompleted,
        updatedItemHandler,
        handleToggleAllDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
