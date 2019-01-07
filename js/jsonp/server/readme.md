http://localhost:3000/api  web server
http://localhost:8080/data.json 
https://localhost:8080/
存在跨域 A(8080 index.html) -> B(3000 /api) 
虽然是同一个domain，但是port不同，我们也认为是跨域
JS 同源机制（前端跟后端 信任），如果是跨域请求，不允许。
连端口不一样，都会跨域。哪怕在一家公司，因为提供的服务、部门或项目不一样，他都会需要使用跨域的能力来连调。
例如：
waimai.eleme.com 子域名 外卖部门
jiudian.eleme.com 子域名 酒店部门 跨部门的技术服务
music.qq.com 第三方API服务
哪怕是同一个域名（一级域名，二级域名） 有可能提供不同的服务
前端 8080（react client） 后端 3000（server koa/api） ngnix
我们现在是前后端分离来并行开发

