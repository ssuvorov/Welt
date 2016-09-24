import Controller from './controller'

class App {
  constructor() {
    this.bindEvents()
  }

  init() {
    new Controller()
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
