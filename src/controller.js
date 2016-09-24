import Router from './router'
import Users from './view/users'
import News from './view/news'

class Controller {
  constructor() {
    this.active = {}

    this.router = new Router({
      '/': () => {
        this.setView(Users)
      },
      'news/userid/:userid': (options) => {
        this.setView(News, options)
      }
    })
  }

  setView(View, options) {
    if (!View) return
    
    if (this.active.destroy) {
      this.active.destroy()
    }
    
    const view = new View(options)
    
    this.active = view
  }
}

export default Controller