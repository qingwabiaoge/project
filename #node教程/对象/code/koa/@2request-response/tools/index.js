var getCookies = function (request) {
  var cookies = {};
  request.headers && request.headers.cookie.split(';').forEach(function (cookie) {
    var parts = cookie.match(/(.*?)=(.*)$/)
    cookies[parts[1].trim()] = (parts[2] || '').trim();
  });
  return cookies;
};

module.exports = {getCookies}
