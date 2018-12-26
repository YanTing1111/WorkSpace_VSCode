import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

// actionTypes 常量，声明动作类型，可以统一查看管理及修改
const CHANGE_VISIBILITY = "CHANGE_VISIBILITY";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

// state的get函数，可以对state进行返回，或者追加修饰。
// state就是代表着那棵状态树，有多个reducer分支，每个reducer都有一个命名空间。
const getVisibility = state => state.visible;
const getCounterValue = state => state.counter.value;

// 初始化状态
const initialState = {
  visible: true,
  counter: {
    value: 0
  }
}

// reducer 可以有多个，由combineReducers合并，合并时可以给每一个reducer取一个名字。
// 为什么有多个reducer？想将应用的state设计模式化
const counterReducer = function(state = initialState.counter, action) {
  if(action.type === ADD) {
    return {value: state.value + 1}
  } else if(action.type === SUBTRACT) {
    if(state.value === 0) return {value: 0};
    return {value: state.value - 1}
  }
  return state;
}
const visibilityReducer = (state = initialState.visible, action) => {
  if(action.type === CHANGE_VISIBILITY) {
    return action.visible;
  }
  return state;
}

// 用combineReducers这个函数合并reducer分支
const rootReducer = combineReducers({
  visible: visibilityReducer,
  counter: counterReducer
});

// 动作函数，每一个关于state的修改都应该有一个动作函数。返回对象。
const add = () => ({type: ADD});
const subtract = () => ({type: SUBTRACT});
const changeVisibility = (visible) => ({
  type: CHANGE_VISIBILITY,
  visible
})

const store = createStore(rootReducer);

// redux目标：跨组件共享状态
// redux架构影响了组件的设计为：
// 函数式的表现型组件 + connect设计了state，dispatch的高阶容器型组件

function Counter({ value, add, subtract}) {
  return (
    <div>
      <p>Value: { value }</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  )
}

// redux的核心：可以不管它的层级，可以不断地向redux发出请示
const Visibility = ({ changeVisibility }) => (
  <div>
    <button onClick={() => {
      changeVisibility(true)
    }}>Visille</button>
    <button onClick={() => {
      changeVisibility(false)
    }}>Hidden</button>
  </div>
);
const VisibilityConneted = connect(null, dispatch => ({
  changeVisibility: value => dispatch(changeVisibility(value))
}))(Visibility);
const CounterConnected = connect(state => ({
  value: getCounterValue(state)
}),
dispatch => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract())
}))(Counter);

const App = ({ visible }) => (
  <div>
    <VisibilityConneted />
    { visible && <CounterConnected />}
  </div>
);
const AppConnected = connect(
  state => ({
    visible: getVisibility(state)
  })
)(App);

ReactDOM.render(<Provider store={store}>
  <AppConnected />
  </Provider>,
  document.getElementById("root"));
