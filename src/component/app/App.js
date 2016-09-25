import Controller from 'core/controller'

const createAppComponent = ({ Users, News, Router }) => {
  return class App extends Controller {
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
}

export default createAppComponent
