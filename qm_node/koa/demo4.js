const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

// 支持async 去查数据库、文件处理、IO操作等后端异步任务
const main = async (ctx, next) => {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFileSync('./template.html', 'utf8');
}

app.use(main);
app.listen(8080);
