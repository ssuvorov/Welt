import expect from 'expect'
import Router from '../src/router'

describe('Router', () => {
  it('initializes', () => {
    const router = new Router()
    expect(router).toBeTruthy()
  })

})

