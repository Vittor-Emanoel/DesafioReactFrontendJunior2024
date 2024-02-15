import React, { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { ITask } from "../entities/Task";
import { tasksService } from "../services/tasks";

interface TaskProviderValue {
  tasks: ITask[];
  totalOutstanding: number;
  handleAddItem: (data: ITask) => void;
  deleteTasks: (id: string) => void;
  updatedItemHandler: (data: ITask) => void;
  isClearCompleted: () => void;
  handleToggleAllDone: () => void;
}

export const TaskContext = createContext({} as TaskProviderValue);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("todos");

  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await tasksService.getAll();
      setTasks(result);
    } catch (error) {
      toast.error("Deu ruim parceiro!!");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const filteredTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.isDone);
      case "completed":
        return tasks.filter((tasks) => tasks.isDone);
      default:
        return tasks;
    }
  };

  function updatedItemHandler({ id, title, isDone }: ITask) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: title,
          isDone: isDone,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function handleAddItem(task: ITask) {
    setTasks([task, ...tasks]);
  }

  function handleToggleAllDone() {
    const allTasksAreDone = tasks.every((task) => task.isDone);
    const updatedTasks = tasks.map((task) => ({
      ...task,
      isDone: !allTasksAreDone,
    }));

    setTasks(updatedTasks);
  }

  function isClearCompleted() {
    setTasks(tasks.filter((item) => item.isDone !== true));
  }

  function deleteTasks(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const totalOutstanding = tasks.reduce((acc, value) => {
    if (!value.isDone) {
      return acc + 1;
    }
    return acc;
  }, 0);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks(),
        deleteTasks,
        handleAddItem,
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
