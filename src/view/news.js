import NewsModel from '../model/news'
import UserModel from '../model/user'
import newsTemplate from '../templates/news.handlebars'
import loaderTemplate from '../templates/loader.handlebars'

class Users {
  constructor(options = {}) {
    this._element = document.body
    this.userId = parseInt(options.params.userid, 10)
    this.template = newsTemplate
    this.newsModel = new NewsModel()
    this.userModel = new UserModel()
    
    this.init()
  }

  init() {
    this.userModel.fetch().then(() => {
      this.newsModel.fetch(this.userId).then(() => {
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
      const { userId, userModel } = this
      const activeUser = userModel.getById(userId)

      this._element.innerHTML = this.template({
        user: activeUser,
        news: this.newsModel.getAll(),
        spinner: loaderTemplate
      })
  }

  destroy() {
    this.unbindEvents()
  }
}

export default Users