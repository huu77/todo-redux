export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchTextAction = (data) => {
  return {
    type: "filter/search",
    payload: data,
  };
};
export const statusFilterChange = (data) => {
  return {
    type: "filter/status",
    payload: data,
  };
};
export const priorityFilterChange = (data) => {
    return {
      type: "filter/priority",
      payload: data,
    };
  };
export const checkedChange = (id) => {
  return {
    type: "todo/checked",
    payload:id
  };
};
