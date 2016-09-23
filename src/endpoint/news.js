import 'isomorphic-fetch'

import Endpoint from './index'

class News extends Endpoint {
  getNews(userId) {
    const query = '?' + this.queryToString({userId: userId})

    return fetch(this.API_ROOT + 'posts' + query)
      .then(response => response.json().then( json => ({ json, response })) )
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        return Promise.resolve(json)
      })
  }
}

export default News