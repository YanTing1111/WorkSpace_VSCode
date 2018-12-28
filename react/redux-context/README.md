redux解决的是：父子组件，兄弟组件传值很麻烦
context 是新的希望，react-redux基于它实现
全局状态
可以打破层次关系，实现共享
所以需要redux
但是一定需要redux吗？不一定需要，可以用context

- context API redux 依靠它
  1. childContextTypes = {
    store: PropTypes.Object
  }
    确保父组件一定会给子组件提供什么样的状态
  2. getChildContext() {
    return {store: {}}
  }

