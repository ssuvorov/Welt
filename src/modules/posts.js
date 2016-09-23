import UsersEndpoint from '../endpoint/UserEndpoint'
import Template from '../templates/users.handlebars'

class Users {
  constructor() {
    this._element = document.body
    this.items = []
    this.usersEndpoint = new UsersEndpoint()

    this.init()
  }

  init() {
    this.fetch().then(() => {
      console.log('Users: ', this.items)
    })
  }

  fetch() {
    return this.usersEndpoint.getUsers()
      .then((users) => {
          this.items = users

          this.render()
        }
      )
  }

  render() {
      this._element.innerHTML = Template({users: this.items})
  }
}

export default Users