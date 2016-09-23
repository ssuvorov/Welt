import Store from './store';

class Controller {
  constructor() {
    this.store = new Store()
    this.active = {}
  }

  setView(View, options) {
    if (!View) return
    
    const { store } = this;

    this.active.destroy ? this.active.destroy() : ''
    const view = new View(store, options)
    
    this.active = view
  }
}

export default Controller