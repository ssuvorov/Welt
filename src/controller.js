import Store from './store';
import Router from './router'
import Users from './view/users'
import News from './view/news'

class Controller {
  constructor() {
    this.store = new Store()
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
    
    const { store } = this;

    if (this.active.destroy) {
      this.active.destroy()
    }
    
    const view = new View(store, options)
    
    this.active = view
  }
}

export default Controller