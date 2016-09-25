// import page from 'page'
import Router from './router'

describe('Router', () => {

  it('created', () => {
    const options = { test : 'test' }
    const router = new Router(options)
    
    expect(router.options).toBe(options)
  })
})

