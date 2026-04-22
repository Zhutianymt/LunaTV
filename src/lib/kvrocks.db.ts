/* eslint-disable no-console */

import { BaseRedisStorage } from './redis-base.db';

export class KvrocksStorage extends BaseRedisStorage {
  constructor() {
    const config = {
      url: process.env.KVROCKS_URL!,
      clientName: 'Kvrocks',
    };

    // ✅ 多实例隔离（非常关键）
    const globalSymbol = Symbol.for(
      `__REDIS_${process.env.REDIS_DB || 0}_${process.env.REDIS_PREFIX || "default"}__`
    );

    super(config, globalSymbol);
  }
}
