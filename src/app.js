import router from './router'

class App {
  constructor() {
    this.bindEvents()
  }

  init() {
    router.init()
  }

  bindEvents() {
    window.addEventListener('load', this.init)
  }

  unbindEvents() {
    window.removeEventListener('load', this.init)
  }

  destroy() {
    this.unbindEvents()
  }
}

export default App
