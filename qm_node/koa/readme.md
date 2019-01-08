- 启动web server
HTTP Server 3000 端口

用户request(n)  中间件（函数）  response(访问结束)

网站中有很多图片，不可能都给它创建路由，在后端里面用静态资源服务

中间件是有顺序的，next() 
在任何一个中间件里遇到了reaponse.body(), 退出循环，返回结果
