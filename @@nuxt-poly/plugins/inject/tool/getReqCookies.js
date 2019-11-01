//获得request的cookie
export default function (request) {
  var cookies = {};
  if (request.headers && request.headers.cookie) {
    request.headers && request.headers.cookie.split(';').forEach(function (cookie) {
      var parts = cookie.match(/(.*?)=(.*)$/)
      cookies[parts[1].trim()] = (parts[2] || '').trim();
    });
  }
  return cookies;
};
