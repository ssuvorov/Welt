import Controller from 'core/controller'
import Users from 'component/user'
import News from 'component/news'
import Router from 'core/router'

class App extends Controller {
  constructor(props) {
    super(props)

    this.active = {}

    this.router = new Router({
      '/': () => {
        this.setView(Users)
      },
      'news/userid/:userid': (options) => {
        this.setView(News, options)
      }
    })

    this.router.init()
  }

  setView(View, options = {}) {
    if (!View) return

    options.element = this.element

    if (this.active.destroy) {
      this.active.destroy()
    }

    const view = new View(options)

    this.active = view
  }
}

export default App
