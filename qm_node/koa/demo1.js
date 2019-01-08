const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');

const app = new Koa();
var router = new Router();

// ctx 上下文环境
// const about = ctx => {
  // ctx.response.body = 'hello world';
  // ctx.response.type = 'html'; //支持html格式的返回
  // ctx.response.body = fs.createReadStream('./template.html');

  // if(ctx.request.path !== '/') {
  //   ctx.response.type = 'html';
  //   ctx.response.body = '<a href="/">Index Page</a>';
  // } else {
  //   ctx.reponse.body = 'hello world';
  // } 
// }

router.get('/', (ctx) => {
  ctx.response.body = 'hello world';
})
.get('/about', (ctx) => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
})

// template.html V层  main C层
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);