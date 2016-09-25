import Endpoint from './index'

describe('Main Endpoint', () => {
  it('convert query object to string', () => {
    const endpoint = new Endpoint()
    const query = { id: 1 }
    const queryString = endpoint.queryToString(query)

    expect(queryString).toEqual('id=1')
  })
})