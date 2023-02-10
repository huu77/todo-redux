import filterReducer from "../components/Filters/filterSlice";
import todoReducer from "../components/TodoList/todoReducer";
import {combineReducers} from 'redux'
// const rootReducer = (state={}, action) => {
//   return {
//     filtters: filterReducer(state.filters,action),
//     todoList: todoReducer(state.todoList,action),
//   };
// };
//use combineReducers gonj hon
const rootReducer=combineReducers({
    filtters: filterReducer ,
    todoList: todoReducer ,
})
export default rootReducer;
