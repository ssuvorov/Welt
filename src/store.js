class Store {
  constructor() {
    this.data = {}
  }
  
  get(key) {
    return this.data[key]
  }

  has(key) {
    return this.data.hasOwnProperty(key)
  }
  
  insert(key, items) {
    this.data[key] = items
  }
}

export default Store