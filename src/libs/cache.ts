import CachemanRedis from 'cacheman-redis';
import client from './redis';

const cacheman = new CachemanRedis(client);

const PREFIX = '[gb_test]';

const cache = {
  /**
   * Set an entry.
   *
   * @param {String} key
   * @param {Mixed} val
   * @param {Number} ttl
   */
  set(v1, v2, v3?): Promise<string> {
    const args = arguments;
    if (typeof args[0] === 'object') args[0] = args[0].join(':').replace(/(\:?)$/, '');

    args[0] = `${PREFIX}:${args[0]}`;

    return new Promise((resolve, reject) => {
      cacheman.set.apply(cacheman, [...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }]);
    });
  },

  /**
   * Get an entry (wildcards supported).
   *
   * @param {String} key
   * @api public
   */
  get(v): Promise<string> {
    const args = arguments;
    if (typeof args[0] === 'object') args[0] = args[0].join(':').replace(/(\:?)$/, '');

    args[0] = `${PREFIX}:${args[0]}`;

    return new Promise((resolve, reject) => {
      cacheman.get.apply(cacheman, [...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }]);
    });
  },

  /**
   * Delete an entry (wildcards NOT supported).
   *
   * @param {String} key
   * @api public
   */
  del(v) {
    const args = arguments;
    if (typeof args[0] === 'object') args[0] = args[0].join(':').replace(/(\:?)$/, '');

    args[0] = `${PREFIX}:${args[0]}`;

    return new Promise((resolve, reject) => {
      cacheman.del.apply(cacheman, [...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }]);
    });
  },

  /**
   * Clear all entries in cache.
   *
   * @api public
   */
  clear() {
    const args = arguments;
    return new Promise((resolve, reject) => {
      cacheman.clear.apply(cacheman, [...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }]);
    });
  },
};

export default cache;
