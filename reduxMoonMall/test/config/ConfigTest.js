/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import config from 'config';

describe('appEnvConfigTests', () => {
  it('should load app config file depending on current --env', () => {
    expect(config.appEnv).to.equal('test');
  });
});
