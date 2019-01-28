const Router = require('koa-router');

const home = new Router();

home.get('/', async (ctx) => {
  const title = '首页';
  ctx.body = title;
});

const router = new Router();
router.use('/', home.routes(), home.allowedMethods());

module.exports = router;