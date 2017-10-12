const redis = require('redis');
const client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

client.on('error', (err) => {
  console.log('Err ---> ', err);
});

client.on('connect', function() {
  console.log('connected');
});


module.exports = client;