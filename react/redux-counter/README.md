- redux是一种设计模式
- 增加代码结构或目录结构
- store文件夹（状态仓库）  统一管理状态的地方=>共享和管理
  大型项目，状态多，难管理
  共享状态  getState setState
- 组件通信
- 统一状态 树状结构 => 统一状态树 Store 它是唯一的
- api
  1. store.getState() 读
  2. store.dispatch({type: "INCREMENT"}) 
    委派动作，相应的reducer得以计算，返回新的状态，MVVM 更新 UI
  3. store.subscribe(render) 订阅

