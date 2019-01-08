module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('我要学hapi');
    }
  }
]