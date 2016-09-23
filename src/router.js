import page from 'page'

import Controller from './controller';
import Users from './view/users' 
import News from './view/news'


class Router {
  constructor(options = {}) {
    this.controller = new Controller()
    this.options = options
  }

  prepare() {
    const self = this

    page.base('/')

    // define routes
    for (let route in this.options) {
      const view = this.options[route]

      page(route, (options) => {
        self.controller.setView(view, options)
      })
    }

  }

  init() {
    this.prepare()
    page()
  }
}

export default new Router({
  '/': Users,
  'news/userid/:userid': News
})

