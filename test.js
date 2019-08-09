async function test() {
  var Redis = require('ioredis');
  var redis = new Redis({
    port: 6378,
    password: '123456'
  });

  await redis.setex('f0oo', 10, 'br');
  const keys = await redis.keys('*');
  console.log(keys);
}

test();
