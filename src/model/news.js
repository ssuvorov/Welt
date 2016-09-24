import Endpoint from '../endpoint/news'

class News {
  constructor() {
    this.items = []
    this.endpoint = new Endpoint()
  }

  fetch(userId) {
    return this.endpoint.getNews(userId)
      .then((news) => {
        this.items = news
      })
      .catch((error) => {
        alert('Unable to get data. Something goes wrong...')
      })
  }

  getAll() {
    return this.items
  }
}

export default News