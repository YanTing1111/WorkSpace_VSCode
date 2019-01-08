const Koa = require('koa');
const path = require('path');
const staticSever = require('koa-static');

const app = new Koa();

app.use(staticSever(path.join(__dirname)));
app.listen(3003);
