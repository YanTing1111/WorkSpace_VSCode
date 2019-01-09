const Hapi = require('hapi');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
require('env2')('./.env');
const config = require('./config');

const server = new Hapi.Server();

server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  //在所有的路由之前注册插件
  await server.register([
    ...pluginHapiSwagger
  ]);
  server.route([
    ...routesHelloHapi,
    ...routesShops
  ]);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}
init();
