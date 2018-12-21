import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import './index.css';
import App from './App';
import Counter from "./components/Counter";
import * as serviceWorker from './serviceWorker';
import counter from "./reducers";

// 构建单独状态管理的地方 由redux的createStore进行构建
// 状态是与UI统一的，状态计算器reducer
// reducer：状态计算器，一个帮你专门计算各种状态的地方
const store = createStore(counter);
const rootEl = document.getElementById("root");
const render = () => ReactDOM.render(
  <Counter 
    value={store.getState()} 
    onIncrement={() => store.dispatch({
      type: "INCREMENT"
    })}
    onDecrement={() => store.dispatch({
      type: "DECREMENT"
    })}/>, 
  rootEl);

render();
store.subscribe(render);

// ReactDOM.render((<div>
//   {store.getState()}
// </div>), document.getElementById('root'));

// serviceWorker.unregister();
