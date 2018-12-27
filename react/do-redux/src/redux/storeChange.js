// action
// 为何要dispatch？写，要有规则，要盯紧何时写、如何写，dispatch只是一个代号
// 只负责state的计算
export const storeChange = (state, action) => {
  switch(action.type) {
    case "HEAD_COLOR":
      state.head.color = action.color
      break;
    case "BODY_TEXT":
      state.body.text = action.text
      break;
    default:
      break;
  }
}