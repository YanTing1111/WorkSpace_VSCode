const env = process.env;
console.log('process.env:  ',env);
module.exports = {
  host: env.HOST,
  port: env.PORT
}