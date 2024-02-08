import { ITodo } from "../entities/Todo";
import { ActionTypes } from "./actions";

interface TodosState {
  todos: ITodo[];
}

export function todosReducer(state: TodosState, action: any) {
  switch (action.type) {
    case ActionTypes.FIND_ALL_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case ActionTypes.FIND_FOR_ACTIVE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo: ITodo) => !todo.isDone),
      };
    default:
      return state;
  }
}
