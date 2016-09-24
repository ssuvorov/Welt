import Controller from 'core/controller'
import loaderTemplate from 'core/templates/loader.handlebars'
import NewsModel from 'models/news'
import UserModel from 'models/user'
import newsTemplate from './templates/news.handlebars'

class News extends Controller {
  constructor(props) {
    super(props)

    this.userId = parseInt(props.params.userid, 10)
    this.template = newsTemplate
    this.newsModel = new NewsModel()
    this.userModel = new UserModel()
    this.user = {}
    this.items = []

    this.init()
  }

  init() {
    this.userModel.getById(this.userId)
      .then(user => {
        this.user = user
        this.newsModel.getAll(this.userId)
          .then((items) => {
            this.items = items

            this.render()
          })
      })

    this.render()
    this.bindEvents()
  }

  bindEvents() {
  
  }

  unbindEvents() {
  
  }

  render() {
      const { userId } = this

      this.element.innerHTML = this.template({
        user: this.user,
        news: this.items,
        spinner: loaderTemplate
      })
  }

  destroy() {
    this.unbindEvents()
    this.element.innerHTML = ''
  }
}

export default News