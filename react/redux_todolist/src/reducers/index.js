import { ADD, DELETE } from "../constants/todos";
import { combineReducers } from "redux";

const INITAL_STATE = {
  todos: [
    { id: 0, text: "第一条todo"}
  ]
}

function todos (state = INITAL_STATE, action) {
  let todoNum = state.todos.length;
  switch(action.type) {
    case ADD:
      return {//返回了一个全新的状态，与之前的状态就没有关系了，为的是准确性
        ...state,//展开state，展开后，旧的todos会覆盖新的todos，了解es6的json展开运算符
        todos: state.todos.concat({
          id: todoNum,
          text: action.data
        })
      }
    case DELETE:
      // console.log("del--reducers");
      let newTodos = state.todos.filter(item => {
        return item.id !== action.id
      })
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state;
  }
}

export default combineReducers({
  todos
});
// 如果一个项目里面不需要用到combineReducers的时候（即只有少量的状态），就不需要用redux
// 用了redux，一定要用combineReducers，大型项目才需要用redux