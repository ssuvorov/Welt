import Endpoint from './index'

class News extends Endpoint {
  constructor(props) {
    super(props)
    
    this.url = this.API_ROOT + 'posts'
  }
}

export default News