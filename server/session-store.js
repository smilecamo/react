// 给传入的id设置前缀加以区分
function getRedisSessionId(sid) {
  return `ssid:${sid}`;
}
class RedisSessionStore {
  constructor(client) {
    this.client = client;
  }
  // 获取redis中存储的数据
  async get(sid) {
    console.log('get sessionId ' + sid);
    const id = getRedisSessionId(sid);
    const data = await this.client.get(id);
    if (!data) {
      return null;
    }
    try {
      const result = JSON.parse(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 设置redis中的数据
   * @param {*} sid
   * @param {*} sess 内容
   * @param {*} ttl 存储时间
   */
  async set(sid, sess, ttl) {
    console.log('set sessionId ' + sid);
    const id = getRedisSessionId(sid);
    // 时间格式化除以1000转化成毫秒
    if (typeof ttl === 'number') {
      ttl = Math.ceil(ttl / 1000);
    }
    try {
      // 字符串转换
      const sessStr = JSON.stringify(sess);
      if (ttl) {
        // 设置有过期时间的
        await this.client.setex(id, ttl, sessStr);
      } else {
        // 设置没有过期时间的
        await this.client.setex(id, sessStr);
      }
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 删除redis某个session
   * @param {*} sid
   */
  async destroy(sid) {
    console.log('del sessionId ' + sid);
    const id = getRedisSessionId(sid);
    await this.client.del(id);
  }
}

module.exports = RedisSessionStore;
