import Controller from './controller'

describe('Core controller', () => {
  it('initializes', () => {
    const div = document.createElement('div')
    const controller = new Controller({ element: div })
    expect(controller.element).toBe(div)
  })
})

