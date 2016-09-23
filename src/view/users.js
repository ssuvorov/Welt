import Endpoint from '../endpoint/user'
import Template from '../templates/users.handlebars'

class Users {
  constructor(store, options = {}) {
    this._element = document.body
    this.store = store
    this.endpoint = new Endpoint()
    this.template = Template

    this.init()
  }

  init() {
    this.fetch()
    this.bindEvents()
  }

  bindEvents() {
    
  }

  unbindEvents() {
    
  }
  
  fetch() {
    return this.endpoint.getUsers()
      .then((users) => {
          this.store.insert('users', users)

          this.render()
        }
      )
  }

  render() {
      this._element.innerHTML = this.template({users: this.store.get('users')})
  }

  destroy() {
    this.unbindEvents()
  }
}

export default Users