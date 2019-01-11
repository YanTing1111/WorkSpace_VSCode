const redis = require('../../redis');

module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page - 1) * limit;
    const { client, getAsync, setAsync } = redis(request);
    // mysql 有IO压力，用户量一大，不做缓存是不行的
    // redis或早期的memorycache 来做内存数据库， 读取速度快，没有IO压力
    // 数据存储应该的逻辑：redis(key) 有吗？ 有就直接返回，没有的话mysql set redis
    const redisResName = `postlimit${limit}offset${offset}list`;
    const redisRes = await getAsync(redisResName);
    console.log('-----------------------------------------------');
    console.log(redisRes);
    console.log('-----------------------------------------------');
    if(redisRes) {
      reply(JSON.parse(redisRes));
    } else {
      const { rows: results, count: totalCount } = 
        await options.models.blogs.findAndCountAll({
          limit,
          offset
        });
      await setAsync(redisResName, JSON.stringify({ results, totalCount }));
      client.EXPIRE(redisResName, 60); //过期时间设置
      reply({ results, totalCount });
    }
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine
      }
    }
  } 
})