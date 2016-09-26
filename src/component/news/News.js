import Controller from 'core/controller'
import loaderTemplate from 'core/templates/loader.handlebars'
import NewsModel from 'models/news'
import UserModel from 'models/user'
import newsTemplate from './templates/news.handlebars'

const createNewsComponent = ({ 
  loaderTemplate, 
  UserModel, 
  usersTemplate 
}) => {
  return class News extends Controller {
    constructor(props) {
      super(props)
  
      this.userId = parseInt(props.params.userid, 10)
      this.template = newsTemplate
      this.newsModel = new NewsModel()
      this.userModel = new UserModel()
      this.data = {
        user: {},
        items: [],
        error: '',
        spinner: loaderTemplate
      }
  
      this.init()
    }
  
    init() {
      this.userModel.getById(this.userId)
        .then(user => {
          this.data.user = user
          this.newsModel.getAll(this.userId)
            .then((items) => {
              this.data.items = items
              this.render()
            })
            .catch(error => {
              this.data.error = error
              this.render()
            })
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

export default createNewsComponent