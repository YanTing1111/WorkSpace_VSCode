react(UI) + redux(data flow) + immutable(不可变数据)

reducer里面
  switch
    case
    default
      return
有性能问题
在状态之中只有一部分更新了，但我们却丢掉了没有更新的大部分，此为浪费

