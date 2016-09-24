import Endpoint from '../endpoint/news'
import newsTemplate from '../templates/news.handlebars'
import loaderTemplate from '../templates/loader.handlebars'

class Users {
  constructor(store, options = {}) {
    this._element = document.body
    this.userId = parseInt(options.params.userid, 10)
    this.store = store
    this.endpoint = new Endpoint()
    this.template = newsTemplate

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
    return this.endpoint.getNews(this.userId)
      .then((news) => {
        this.store.insert('news', news)
        this.render()
      })
      .catch((error) => {
        alert('Unable to get data. Something goes wrong...')
      })
  }

  render() {
      const { userId } = this
      const users = this.store.get('users')
      const activeUser = users && users.filter(item => {
        return item.id === userId
      })

      this._element.innerHTML = this.template({
        user: activeUser,
        news: this.store.get('news'),
        spinner: loaderTemplate
      })
  }

  destroy() {
    this.unbindEvents()
  }
}

export default Users