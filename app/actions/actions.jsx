export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

// toggleTodo(id) TOGGLE_TODO
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
