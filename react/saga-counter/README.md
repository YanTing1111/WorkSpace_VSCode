何为中间？ UI <->$n redux 
中间件 middleware 生态npm

UI dispatch INCREMENT_ASYNC
- UI触发了一个action->INCREMENT_ASYNC，但是何时触发呢？
  如果用case的话就是同步的了，可以用订阅发布者模式
中间处理一下 发布者 redux-thunk redux-saga 请求， setTimeout dispatch INCREMENT
中间件 是一个处理需求的地方，它可以暂且收纳UI提出的需求

