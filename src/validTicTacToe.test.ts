import { validTicTacToe } from './validTicTacToe'

describe('tic-tac-toe board', () => {
  it('empty grid is valid', () => {
    expect(validTicTacToe([])).toEqual(true)
  })
})
