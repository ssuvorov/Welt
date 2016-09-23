import 'isomorphic-fetch'

import Endpoint from './Endpoint'
import UsersModel from '../model/Users'

class UserEndpoint extends Endpoint {
  getUsers() {
    return fetch(this.API_ROOT + 'users')
      .then(response => response.json().then( json => ({ json, response })) )
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        const items = new UsersModel(json).getItems()

        return Promise.resolve(items)
      })
  }
}

export default UserEndpoint