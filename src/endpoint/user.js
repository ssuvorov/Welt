import Endpoint from './index'

class User extends Endpoint {
  constructor(props) {
    super(props)

    this.url = this.API_ROOT + 'users'
  }
}

export default User