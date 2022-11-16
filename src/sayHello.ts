export const sayHello = (name = 'World') =>
  name.length > 0 ? `Hello, ${name}!` : 'Hello!'
