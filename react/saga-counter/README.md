何为中间？ UI <->$n redux 
中间件 middleware 生态npm

UI dispatch INCREMENT_ASYNC
- UI触发了一个action->INCREMENT_ASYNC，但是何时触发呢？
  如果用case的话就是同步的了，可以用订阅发布者模式
中间处理一下 发布者 redux-thunk redux-saga 请求， setTimeout dispatch INCREMENT
中间件 是一个处理需求的地方，它可以暂且收纳UI提出的需求

* saga 是一个redux状态异步处理的中间件
原生的react通过生命周期或业务逻辑来异步请求数据，耦合了redux数据管理业务在UI之中，是不可取的，异步（axios，定时器 等等）是绝对不可能改变的
- 异步处理的方式：promise + generator* yield / async await
  放到saga文件中
    watch 每一个actionType，take 给一个异步函数去执行，位于中间件中，
    仍然属于redux
    createStore(reducers, applyMiddleware(reduxLogger, sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    - API
      - takeEvery(actionType, gen)
      - redux 状态最终仍然是同步处理的，
        put() 在saga内部dispatch同步action
      - 异步流程多，所以把它合为一处 all()


