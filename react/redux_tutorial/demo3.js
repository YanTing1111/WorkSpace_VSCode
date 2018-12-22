import { createStore, combineReducers } from "redux";

// 一个分支
var reducer_0 = function(state = {}, action) {
  switch(action.type) {
    case "SAY_SOMETHING":
      return {
        ...state,
        message: action.value
      }
    default:
      return state
  }
}

// 两个分支
const userReducer = (state={}, action) => {
  switch(action.type) {
    default:
      return state
  }
}

// 合并分支到根节点
var reducer = combineReducers({
  user: userReducer,
  reducer_0: reducer_0
});

var store = createStore(reducer);
