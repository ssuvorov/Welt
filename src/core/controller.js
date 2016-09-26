class Controller {
  constructor({ element }) {
    this.element = element
  }
  
  unrender() {
    this.element.innerHTML = ''
  }
}

export default Controller