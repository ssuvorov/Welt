import Controller from 'core/controller'
import loaderTemplate from 'core/templates/loader.handlebars'
import UserModel from 'models/user'
import usersTemplate from './templates/users.handlebars'

class Users extends Controller {
  constructor(props) {
    super(props)

    this.template = usersTemplate
    this.model = new UserModel()
    this.items = []

    this.init()
  }

  init() {
    this.model.getAll()
      .then((items) => {
        this.items = items
        
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
    this.element.innerHTML = this.template({
      users: this.items,
      spinner: loaderTemplate
    })
  }

  destroy() {
    this.unbindEvents()
    this.element.innerHTML = ''
  }
}

export default Users