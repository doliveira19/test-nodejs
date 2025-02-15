import redis from 'redis-promisify';

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export default redisClient;
