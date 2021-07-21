const redis = require('redis');
const { promisifyAll } = require('bluebird');

const client = promisifyAll(redis).createClient({
  host: 'localhost',
  port: 6379,
});

export { client };
