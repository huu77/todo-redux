import { createSelector } from "reselect";
// export const todoListSelector=(state)=>{

//     const searchText=searchselector(state)
//     const todoReamaing=state.todoList.filter((todo)=>{
//         return todo.name.includes(searchText)
//     })
//     return todoReamaing
// }
export const searchselector = (state) => state.filtters.search;
export const todoListSelector = (state) => state.todoList;
export const statusSelector = (state) => state.filtters.status;
export const prioritySelector = (state) => state.filtters.priority;
export const todoReamaingSelector = createSelector(
  todoListSelector,
  searchselector,
  statusSelector,
  prioritySelector,
  (todoList, searchText, status,priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length ? todo.name.includes(searchText) && priority.includes(todo.priority):  todo.name.includes(searchText);
      }
      
      return (todo.name.includes(searchText) && (status === "Completed" ? todo.completed : !todo.completed) && (priority.lenght ?   priority.includes(todo.priority):true ))
    });
  }
);
