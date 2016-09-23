import 'isomorphic-fetch'

import Endpoint from './Endpoint'
import PostsModel from '../model/Posts'

class PostEndpoint extends Endpoint {
  getPosts(endpoint) {
    return fetch(this.API_ROOT + endpoint)
      .then(response => response.json().then( json => ({ json, response })) )
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        const items = new PostsModel(json).getItems()

        return Promise.resolve(items)
      })
  }
}

export default PostEndpoint