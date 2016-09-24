import Endpoint from '../endpoint/user'
import usersTemplate from '../templates/users.handlebars'
import loaderTemplate from '../templates/loader.handlebars'

class Users {
  constructor(store, options = {}) {
    this._element = document.body
    this.store = store
    this.endpoint = new Endpoint()
    this.template = usersTemplate

    this.init()
  }

  init() {
    this.fetch()
    this.render()
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
        this.store.remove('news')
        this.render()
      })
      .catch((error) => {
        alert('Unable to get data. Something goes wrong...')
      })
  }

  render() {
    this._element.innerHTML = this.template({
      users: this.store.get('users'),
      spinner: loaderTemplate
    })
  }

  destroy() {
    this.unbindEvents()
  }
}

export default Users