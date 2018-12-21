// 提供(可以被action计算的)状态
// 理念是：视图与状态是一一对应的
// 所有的状态保存在一个对象中=>state
// 一蹴而就，reducer一定是一个函数，单纯地就负责提供状态
// state=0是初始值，要变化action
// 生命周期里面请求了数据，用户操作等等 action
// UI状态千变万化，对应state的状态值
// 用完就丢

export default (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state -1;
    default:
      return state;
  }
}