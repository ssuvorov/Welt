class Endpoint {

}

Endpoint.prototype.queryToString = function (query) {
  var param;
  var queryStringBuilder = [];

  if (!query) return '';

  for (param in query) {
    if (query.hasOwnProperty(param)) {
      queryStringBuilder.push(param + '=' + query[param]);
    }
  }
  return queryStringBuilder.join('&');
};


export default Endpoint