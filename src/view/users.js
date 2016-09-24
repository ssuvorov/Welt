import UserModel from '../model/user'
import usersTemplate from '../templates/users.handlebars'
import loaderTemplate from '../templates/loader.handlebars'

class Users {
  constructor(options = {}) {
    this._element = document.body
    this.template = usersTemplate
    this.model = new UserModel()

    this.init()
  }

  init() {
    this.model.fetch().then(() => {
      this.render()
    })

    this.render()
    this.bindEvents()
  }

  bindEvents() {

  }

  unbindEvents() {

  }

  render() {
    this._element.innerHTML = this.template({
      users: this.model.getAll(),
      spinner: loaderTemplate
    })
  }

  destroy() {
    this.unbindEvents()
  }
}

export default Users