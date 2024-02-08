export enum ActionTypes {
  FIND_ALL_TODOS = "FIND_ADD_TODO",
  FIND_FOR_ACTIVE_TODOS = "FIND_FOR_ACTIVE_TODOS",
  FIND_FOR_COMPLETED_TODOS = "FIND_FOR_COMPLETED_TODOS",
  TOTAL_TODOS = "TOTAL_TODOS",
  CLEAR_TODOS = "CLEAR_TODOS",
}

export function findAllTodos() {
  return {
    type: ActionTypes.FIND_ALL_TODOS,
  };
}

export function findForActiveTodos() {
  return {
    type: ActionTypes.FIND_FOR_ACTIVE_TODOS,
  };
}

export function findForCompletedTodos() {
  return {
    type: ActionTypes.FIND_FOR_COMPLETED_TODOS,
  };
}

export function totalTodos() {
  return {
    type: ActionTypes.TOTAL_TODOS,
  };
}

export function clearTodos() {
  return {
    type: ActionTypes.CLEAR_TODOS,
  };
}
