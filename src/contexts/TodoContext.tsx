import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { ITodo } from "../entities/Todo";
import { ActionTypes } from "../reducers/actions";
import { todosReducer } from "../reducers/reducer";
import { todosService } from "../services/todos";

interface TodoProviderValue {
  todos: ITodo[];
  findForActiveTodo(): void;
}

export const TodoContext = createContext({} as TodoProviderValue);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todosReducer, { todos: [] });

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("todos");

  const loadTodos = useCallback(async (filter: string | null) => {
    try {
      const result = await todosService.getAll();

      if (filter === "active") {
        const active = result.filter((todo: ITodo) => !todo.isDone);
        setTodos(active);
      } else if (filter === "completed") {
        const completed = result.filter((todo: ITodo) => todo.isDone);
        setTodos(completed);
      } else {
        setTodos(result);
      }
    } catch (error) {
      alert("deu ruim parceiro!!");
    }
  }, []);

  function findForActiveTodo() {
    dispatch({
      type: ActionTypes.FIND_FOR_ACTIVE_TODOS,
      payload: { todos: state.todos },
    });
  }

  useEffect(() => {
    loadTodos(filter);
  }, [filter, loadTodos]);

  return (
    <TodoContext.Provider value={{ todos, findForActiveTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
