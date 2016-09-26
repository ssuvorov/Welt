import Endpoint from 'endpoint/user'

class User {
  constructor() {
    this.items = []
    this.endpoint = new Endpoint()
  }

  _getUsers(query) {
    return this.endpoint.fetch(query)
  }

  getById(id) {
    const query = { id: id }
    
    return this._getUsers(query)
      .then(item => {
        return item[0]
      })
  }
  
  getAll() {
    return this._getUsers()
      .then(users => {
        this.items = users
        return this.items
      })
  }
}

export default User