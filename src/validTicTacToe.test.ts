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
  it('is valid when same count of Xs and Os', () => {
    expect(validTicTacToe([
      [' ', ' ', ' '],
      [' ', 'X', 'O'],
      [' ', ' ', ' '],
    ])).toEqual(true)
  })
  it('is valid when count of Xs is 1 more than Os', () => {
    expect(validTicTacToe([
      [' ', ' ', ' '],
      ['X', 'X', 'O'],
      [' ', ' ', ' '],
    ])).toEqual(true)
  })
})
