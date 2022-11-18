import { validTicTacToe } from './validTicTacToe'

describe('tic-tac-toe grid state', () => {
  it('empty grid is valid', () => {
    expect(validTicTacToe([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ])).toEqual(true)
  })
  it('X can start', () => {
    expect(validTicTacToe([
      [' ', ' ', ' '],
      [' ', 'X', ' '],
      [' ', ' ', ' '],
    ])).toEqual(true)
  })
  it('O must not start', () => {
    expect(validTicTacToe([
      [' ', ' ', ' '],
      [' ', 'O', ' '],
      [' ', ' ', ' '],
    ])).toEqual(false)
  })
  it('is valid when same amount of Xs and Os', () => {
    expect(validTicTacToe([
      [' ', ' ', ' '],
      [' ', 'X', 'O'],
      [' ', ' ', ' '],
    ])).toEqual(true)
  })
})
