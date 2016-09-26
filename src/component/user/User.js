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
      this.data = {
        items: [],
        error: '',
        spinner: loaderTemplate
      }
  
      this.init()
    }
  
    init() {
      this.model.getAll()
        .then((items) => {
          this.data.items = items
          
          this.render()
        })
        .catch(error => {
          this.data.error = error
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
      this.element.innerHTML = this.template(this.data)
    }
  
    destroy() {
      this.unbindEvents()
      this.unrender()
    }
  }
}
export default createUsersComponent