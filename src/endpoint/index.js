const API_ROOT = 'http://jsonplaceholder.typicode.com/'

class Endpoint {
  constructor() {
    this.API_ROOT = API_ROOT
  }
}

Endpoint.prototype.queryToString = function (query) {
  let param;
  let queryStringBuilder = [];

  if (!query) return '';

  for (param in query) {
    if (query.hasOwnProperty(param)) {
      queryStringBuilder.push(param + '=' + query[param]);
    }
  }
  return queryStringBuilder.join('&');
};


export default Endpoint