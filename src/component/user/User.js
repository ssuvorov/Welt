import Controller from 'core/controller'

const createUsersComponent = ({
  loaderTemplate,
  UserModel,
  usersTemplate
}) => {
  return class Users extends Controller {
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
}
export default createUsersComponent