import page from 'page'

import User from './modules/users'

let AppController;

class Router {
  constructor(obj) {
    const self = this

    page.base('/')

    // define routes
    for (let key in obj) {
      const controller = obj[key]

      if ('string' == typeof controller) {
        ((route, fn) => {
          page(key, () => {
            fn.apply(self, arguments);
          })
        })(key, obj[controller])
      }
    }

  }

  start() {
    return page()
  }

  setView(View) {
    if (!View) return
    debugger
    AppController = new View()
  }
}

export default new Router({
  '/': 'index',
  '/about': 'about',
  '/contact': 'contact',
  index: function(){
    debugger
    this.setView(User) },
  about: function(){ this.setView() },
  contact: function(){ this.setView() }
})

