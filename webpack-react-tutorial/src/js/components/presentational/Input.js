// react 组件有多种写法 容器（继承自Component）+表现(箭头函数) 
// props + wxml 表现型组件
import React from "react";
const Input = ({ label, text, type, id, value, handleChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input 
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);
export default Input;
