import page from 'page'

class Router {
  constructor(options = {}) {
    this.options = options
  }

  init() {
    page.base('/')

    Object.keys(this.options).forEach(route => {
      const fn = this.options[route]

      page(route, fn)
    })

    page()
  }
}

export default Router

