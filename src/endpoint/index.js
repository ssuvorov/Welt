const API_ROOT = 'http://jsonplaceholder.typicode.com/'

class Endpoint {
  constructor() {
    this.API_ROOT = API_ROOT
  }

  queryToString(query = {}) {
    return (
      Object.keys(query)
        .map(param => `${encodeURIComponent(param)}=${encodeURIComponent(query[param])}`)
        .join('&')
    )
  }

  fetch(query) {
    if (query) {
      this.url = `${this.url}?${this.queryToString(query)}`
    }
    
    return window.fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load')
        }

        return response
      })
      .then(response => response.json())
  }
}

export default Endpoint