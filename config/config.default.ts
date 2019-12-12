import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = 'zhexia';
  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.mongoose = {
    url: 'mongodb://129.204.95.132/blog',
    options: {},
  };
  config.assets = {
    publicPath: '/public/',
  };
  config.security = {
    csrf: false,
  };
  config.logger = { consoleLevel: 'DEBUG' };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
