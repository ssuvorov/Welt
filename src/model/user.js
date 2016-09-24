import Endpoint from '../endpoint/user'

class User {
  constructor() {
    this.items = []
    this.endpoint = new Endpoint()
  }

  fetch() {
    return this.endpoint.getUsers()
      .then((users) => {
        this.items = users
      })
      .catch((error) => {
        alert('Unable to get data. Something goes wrong...')
      })
  }
  
  getById(id) {
    return this.items.filter(item => {
      return item.id === id
    })
  }
  
  getAll() {
    return this.items
  }
}

export default User