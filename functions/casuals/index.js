const querystring = require('querystring');

const searchByName = require('./search/search');
const formatSearchResult = require('./format/format');

const createResponse = function(code, content) {
  return {
    statusCode: 200,
    body: content || 'Not found'
  };
}

exports.handle = function(event, ctx, cb) {
  const content = event.body;
  const data = querystring.parse(content);

  const query = data.text;

  if(query) {
    searchByName(query)
    .then(result => ctx.succeed(createResponse(200, formatSearchResult(result))))
    .catch(err => ctx.succeed(createResponse(200)));
  } else {
    ctx.succeed(createResponse(200));
  }
}
