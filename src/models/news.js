import Endpoint from 'endpoint/news'

class News {
  constructor() {
    this.items = []
    this.endpoint = new Endpoint()
  }

  _getNews(userId) {
    const query = { userId: userId }
    
    return this.endpoint.fetch(query)
      .then((news) => {
        this.items = news
      })
  }

  getAll(userId) {
    return new Promise((resolve, reject) => {
      this._getNews(userId).then(() => {
        resolve(this.items)
      })
    })
  }
}

export default News