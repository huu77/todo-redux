const initState = [
  {
    id: 1,
    name: "hoc Javascript",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "hoc CSS",
    completed: false,
    priority: "Medium",
  },
  {
    id: 3,
    name: "hoc HTML",
    completed: true,
    priority: "Medium",
  },
];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todo/checked":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};
export default todoReducer;
