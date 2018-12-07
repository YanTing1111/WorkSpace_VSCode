1、一切资源皆可打包， webpack bundle
import logo from "./logo.svg" 图片也可引入到js
2、路由接管一切，配置在最前面
<Router>
    <Route path="" component="">
</Router>
3、有两种路由：BrowserRouter（高级浏览器 mobile， URL更好理解） 使用的是最新的html5的history API
              HashRouter（兼容性好，支持IE8以上的所有浏览器）
4、pushState来自于history API
#   history.pushState(state, title, url)
