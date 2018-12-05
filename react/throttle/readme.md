Ajax Google Suggestion
猜出用户想搜索的内容
用户边输入（input） 边做建议（ajax 后端去匹配，返回list去做dom编程）
react 里面的onChange 实际上是input
频繁地被触发，如何减少一些，不会影响效果?
节流 在一段时间内，只执行一次（eg：300ms）
限制事件执行的方式：防抖和节流
使用lodash _.throttle(fn, time)

onmousemove ontouchmove 会频繁触发多次
throttle 在一定时间内只执行一次

节流的实现方式：
1、使用时间戳 + 闭包
2、使用计时器
区别：实现的方式，体验的细节，第一次执行的方式：时间戳由于是previous先为0，
判断now - previous > wait，先（立刻）执行；setTimeout时，timeout为null，故第一次执行是在wait到点时执行，（等待一秒后）后执行


