// 这是一个函数式组件
import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 seconds</button>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <hr/>
    <div>
      Clicked: {value} times
    </div>
  </div>
)

//对外界传过来的东西进行校验
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;


