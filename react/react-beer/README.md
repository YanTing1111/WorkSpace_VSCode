1、何为Link？
    a标签太弱，所以react-router给了我们Link组件，a标签将完全被接管。to代表原来的href，还有params等等，这些功能将满足单页应用需要的一切。
2、军队在危急的时候接管城市，应用只是页面？当然要路由，路由接管一切。
3、路由按照url 分发组件（Page级别组件）
4、根路由App 
->path "/" 页面A级别组件（Page）-> 容器组件Container -> 函数式组件（Present）
->path "/" 页面B级别组件（Page）-> 容器组件Container -> 函数式组件（Present）
5、H5上的history API可以让我们更新url，页面不用刷新
6、ref，react里的id，可以利用它找到JSX的片段。通过React.createRef()来返回一个不重复的id。可以通过this.xxx.current获取ref
7、context，最后一个大佬，它与component，Lifecycle state，事件，函数式组件 并驾齐驱。用法：this.context.router.history.push("/search/:")
