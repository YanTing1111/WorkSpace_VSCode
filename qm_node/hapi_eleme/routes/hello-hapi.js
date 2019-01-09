module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('我要学hapi');
    },
    config: {
      tags: ['api', 'tests'],
      description: '测试hello-hapi'
    }
  }
]