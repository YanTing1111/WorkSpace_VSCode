1. --hot 选项 热更新
  但状态改变时，只更新一部分
2. --open 自动打开浏览器
3. tsconfig.json 来配置typescript
4. webpak.config.js 做工作流
  - entry src/index.ts webpack打包的入口，规定入口文件
    目前有多个入口，给打包后的文件命名，
    entry: {
      app: './index.ts',
      vendorStyles: [
        '../node_modules/bootstrap/dist/css/bootstrap.css',
      ],
    }
    1. 为何要多个？打包要时间，bootstrap的样式绝对不会改变，没必要每次都打包。
    例如 css lib, react react-router-dom redux antd 等没必要一次性打包
    分开的东西会单独打包，他检测没有改变的文件就不会每次都打包。
    2. 打包出来 index.html 两个文件，http请求数是加了，但是加的不多，现代浏览器（chrome）同时并发少数的http对性能没有影响，反而有优势，因为静态资源是会缓存的，例如 lib css js 不需要下载，而业务组件开发的src component js 是会经常修改的，分开打包，只会让用户更新这一小部分，这样打开页面会更快。
    未来不会改变的 lib部分 会放到cdn 去
  - webpack-dev-server port  启动端口
  - html-plugin 启动src/index.html  template
5. .babelrc 做js编译
6. typescript 在react中做加法，让项目强类型化，减少错误。
  - members 类型定义MemberEntity[]  => members: MemberEntity[]
    在所有生命周期之中请求， api方法返回值类型 interface
  - model 层 
  - api 层

