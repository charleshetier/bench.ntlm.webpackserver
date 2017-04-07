const Agent = require('agentkeepalive');

module.exports = {
  port:1234,
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      agent: createAgent(),
      onProxyRes: onProxyRes,
      secure: false
    }
  }
};


/**
 * proxy resolution interception
 * @param proxyRes
 */
function onProxyRes(proxyRes, req) {
  const now = new Date().getSeconds();
  console.log(req.url);
  const headerKey = 'www-authenticate';
  console.log(now + '> before: ' + proxyRes.headers[headerKey]);
  proxyRes.headers[headerKey] = proxyRes.headers[headerKey] && proxyRes.headers[headerKey].split(',');
  console.log(now + '= after: ' + proxyRes.headers[headerKey]);
  console.log('-');
}

/**
 * Creates an httpAgent
 *
 * @see https://www.npmjs.com/package/agentkeepalive
 * @returns {Agent}
 */
function createAgent() {

  return new Agent({
    maxSockets: 100,       // The max amount of simultaneous sockets
    keepAlive: true,
    maxFreeSockets: 1024,
    keepAliveMsecs:1000,
    timeout: 10000,          // 10s. Warning, If a request is longer than 10s, this value should be increased
    keepAliveTimeout: 5000   // after 5s of inactivity, there should have a new negotiation
  });
}
