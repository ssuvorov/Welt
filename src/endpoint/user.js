import 'isomorphic-fetch'

import Endpoint from './index'

class User extends Endpoint {
  getUsers() {
    return fetch(this.API_ROOT + 'users')
      .then(response => response.json().then( json => ({ json, response })) )
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        return Promise.resolve(json)
      })
  }
}

export default User