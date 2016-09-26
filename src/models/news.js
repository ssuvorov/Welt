import Endpoint from 'endpoint/news'

class News {
  constructor() {
    this.items = []
    this.endpoint = new Endpoint()
  }

  _getNews(userId) {
    const query = { userId: userId }
    
    return this.endpoint.fetch(query)
  }

  getAll(userId) {
    return this._getNews(userId)
      .then((news) => {
        this.items = news
        return this.items
      })
  }
}

export default News