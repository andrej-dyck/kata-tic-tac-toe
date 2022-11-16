import { sayHello } from './sayHello'

describe('say hello', () => {
  it('greets the world when no name is provided', () => {
    expect(sayHello()).toEqual('Hello, World!')
  })
  it('greets the subject when a name is provided', () => {
    expect(sayHello('Doggo')).toEqual('Hello, Doggo!')
  })
  it('simply greets when an empty name is provided', () => {
    expect(sayHello('')).toEqual('Hello!')
  })
})
