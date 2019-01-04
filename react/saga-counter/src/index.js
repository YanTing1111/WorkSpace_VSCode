import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import Counter from "./Counter";
import reduxLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(reduxLogger, sagaMiddleware));
sagaMiddleware.run(rootSaga);//把某个要异步的任务执行一下
const action = type => store.dispatch({ type });
// const doAsyncIncrement = () => {
//   // 不能作为解决方法
//   setTimeout(() => {
//     // 因为在UI业务中的异步，超出了redux的范畴，用了redux就应该坚持用下去
//     action("INCREMENT_ASYNC")
//   }, 1000)
// }

function render() {
  ReactDOM.render(
    <Counter 
      value={store.getState()} 
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      onIncrementAsync={() => action("INCREMENT_ASYNC")}
    />,
    document.getElementById("root")
  );
}
render();
store.subscribe(render);//自己丰衣足食，不使用Provider
