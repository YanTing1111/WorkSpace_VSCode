import React, { Component } from "react";
import PropTypes from "prop-types";
import Head from "./component/Head/Head";
import Body from "./component/Body/Body";

export default class App extends Component{
  // 这个属性里的值，在它的内部，可以打破层次，拿到在顶级组建中共享的状态
  static childContextTypes = {
    store: PropTypes.Object
  }
  // 在redux相应的版本里才支持的API
  getChildContext() {
    const state = {
      head: "我是全局 head",
      body: "我是全局 body",
      headBtn: "修改 head",
      bodyBtn: "修改 body"
    }
    return { store: state}
  }
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
      </div>
    )
  }
}