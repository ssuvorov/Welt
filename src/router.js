import page from 'page'

class Router {
  constructor(options = {}) {
    this.options = options

    this.init()
  }

  init() {
    page.base('/')

    for (let route in this.options) {
      const fn = this.options[route]

      page(route, fn)
    }

    page()
  }
}

export default Router

