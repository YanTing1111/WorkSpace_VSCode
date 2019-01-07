// Node的CommonJS模块化机制方案
const Koa = require("koa");
const app = new Koa(); //Koa() 就是后端应用
const router = require("koa-router")();

// 前端是MVVM，后端是MVC
router.get("/api", (ctx) => {
  const data = {
    name: "糖糖",
    age: 18
  }
  ctx.body = JSON.stringify(data);
});

// koa 是通过middlewares来实现的
app.use(router.routes()); //将路由启用起来
app.listen(3000); //3000端口启动服务



