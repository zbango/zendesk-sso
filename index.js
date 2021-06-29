// requires jwt-simple, uuid
// install with: npm install jwt-simple uuid
// or from: https://github.com/hokaccha/node-jwt-simple and https://github.com/broofa/node-uuid

var http = require('http');
var jwt = require('jwt-simple');
var uuid = require('uuid');
var url = require('url');

var subdomain = 'dianita';
var shared_key = 'TQIpfJ5c21qRhwNqqvEWe4i9POiKyLi7Qn5tNVkV7AIOItX7';

const PORT = process.env.PORT || 5000


http.createServer(function (request, response) {
  var payload = {
    iat: (new Date().getTime() / 1000),
    jti: uuid.v4()
    // name: user.name(),
    // email: user.email()
  };

  // encode
  var token = jwt.encode(payload, shared_key);
  var redirect = 'https://' + subdomain + '.zendesk.com/access/jwt?jwt=' + token;

  var query = url.parse(request.url, true).query;

  if(query['return_to']) {
    redirect += '&return_to=' + encodeURIComponent(query['return_to']);
  }

  response.writeHead(302, {
    'Location': redirect
  });
  response.end();
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);