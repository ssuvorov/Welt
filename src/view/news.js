import Endpoint from '../endpoint/news'
import Template from '../templates/news.handlebars'

class Users {
  constructor(store, options = {}) {
    this._element = document.body
    this.userId = parseInt(options.params.userid, 10)
    this.store = store
    this.endpoint = new Endpoint()
    this.template = Template

    this.init()
  }

  init() {
    this.fetch()
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
        }
      )
  }

  render() {
      const { userId } = this
      const users = this.store.get('users')
      const activeUser = users.filter(item => {
        return item.id === userId
      })

      this._element.innerHTML = this.template({
        user: activeUser,
        news: this.store.get('news')
      })
  }

  destroy() {
    this.unbindEvents()
  }
}

export default Users