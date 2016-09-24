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
    
    return new Promise((resolve, reject) => {
      this._getUsers(query).then(item => {
        resolve(item[0])
      })
    })
  }
  
  getAll() {
    return new Promise((resolve, reject) => {
      this._getUsers().then(users => {
        this.items = users
        resolve(this.items)
      })
    })
  }
}

export default User