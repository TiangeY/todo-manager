import {
  INPUT_ONCLICK,
  OPTION_ONCLICK,
  INPUT_VALUE,
  ADD_TODO_ITEM,
  CLEAR_ALL,
  TODO_ITEM_TOGGLE,
  TODO_ITEM_EDIT,
  DELETE_TODO_ITEM,
  TODO_FILTER,
} from "./actionTypes";

// action: func return object, not just object
export const inputOnclickAction =  (inputType) => ({
  type: INPUT_ONCLICK,
  inputType,
})

export const optionOnclickAction = (item) => ({
  type: OPTION_ONCLICK,
  item,
});

export const inputValueAction = (inputValue) => ({
  type: INPUT_VALUE,
  inputValue,
});

export const addTodoItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const clearAllAction = () => ({
  type: CLEAR_ALL,
});

export const todoItemToggleAction = (id, date) => ({
  type: TODO_ITEM_TOGGLE,
  id,
  date,
});

export const todoItemEditAction = (id, date) => ({
  type: TODO_ITEM_EDIT,
  id,
  date,
});

export const deleteTodoItemAction = (id, date, finish) => ({
  type: DELETE_TODO_ITEM,
  id,
  date,
  finish,
});

export const todoFilterAction = (filter) => ({
  type: TODO_FILTER,
  filter,
});
