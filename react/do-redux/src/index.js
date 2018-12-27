// // 多（层次）组件共享状态
// const appState = {
//   head: {
//     text: "我是老大",
//     color: "red"
//   },
//   body: {
//     text: "我是body",
//     color: "green"
//   }
// }

// // 为何要dispatch？写，要有规则，要盯紧何时写、如何写，dispatch只是一个代号
// function dispatch(state, action) {
//   switch(action.type) {
//     case "HEAD_COLOR":
//       state.head.color = action.color
//       break;
//     case "BODY_TEXT":
//       state.body.text = action.text
//       break;
//     default:
//       break;
//   }
// }

// function renderHead(state) {
//   const head = document.getElementById("head");
//   head.innerHTML = state.head.text;
//   head.style.color = state.head.color;
//   // 存在隐患? getState 读是无所谓的，但是要修改状态的值，只有按规矩办
//   // action 是对状态写，所有组件都遵守的约定。action由dispatch触发
//   // state.body.text = "我是经过head修改后的body";
//   dispatch(state, {type: "BODY_TEXT", text: "我是head经过调用dispatch修改后的body"});
// }

// function renderBody(state) {
//   const body = document.getElementById("body");
//   body.innerHTML = state.body.text;
//   body.style.color = state.body.color;
// }

// // 为什么renderHead和renderBody都使用state，而不是分开来用state.head与state.body呢？
// // 组件只是用自己的状态，就不需要redux
// function renderApp(state) {
//   renderHead(state);
//   renderBody(state);
// }

// // UI render
// renderApp(appState);

/********************************************************************** */

import { state } from "./redux/state.js";
import { storeChange } from "./redux/storeChange.js";
import { createStore } from "./redux/createStore.js";

const { store, dispatch } = createStore(state, storeChange);

function renderHead(state) {
  const head = document.getElementById("head");
  head.innerHTML = state.text;
  head.style.color = state.color;
}
function renderBody(state) {
  const body = document.getElementById("body");
  body.innerHTML = state.text;
  body.style.color = state.color;
}

function renderApp(store) {
  renderHead(store.head);
  renderBody(store.body);
}

renderApp(store);
dispatch({type: "BODY_TEXT", text: "我是调用dispatch修改的body"});
console.log(store);
renderApp(store);