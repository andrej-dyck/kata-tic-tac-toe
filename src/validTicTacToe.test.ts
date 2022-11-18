import { Grid, validTicTacToe } from './validTicTacToe'

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
  it.each<{ grid: Grid }>([{
    grid: [
      [' ', ' ', ' '],
      [' ', 'X', 'O'],
      [' ', ' ', ' '],
    ]
  }, {
    grid: [
      [' ', 'O', ' '],
      [' ', 'X', 'O'],
      [' ', 'X', ' '],
    ]
  }, {
    grid: [
      ['X', 'O', 'X'],
      [' ', 'X', 'O'],
      ['O', 'X', 'O'],
    ]
  }])('is valid when same count of Xs and Os', ({ grid }) => {
    expect(validTicTacToe(grid)).toEqual(true)
  })
  it.each<{ grid: Grid }>([{
    grid: [
      [' ', ' ', ' '],
      ['X', 'X', 'O'],
      [' ', ' ', ' '],
    ]
  }, {
    grid: [
      ['X', 'O', ' '],
      [' ', 'X', 'O'],
      [' ', 'X', ' '],
    ]
  }, {
    grid: [
      ['X', 'O', 'X'],
      ['X', 'X', 'O'],
      ['O', 'X', 'O'],
    ]
  }])('is valid when count of Xs is 1 more than Os', ({ grid }) => {
    expect(validTicTacToe(grid)).toEqual(true)
  })
  it.each<{ grid: Grid }>([{
    grid: [
      [' ', ' ', ' '],
      [' ', 'X', 'O'],
      [' ', ' ', 'O'],
    ]
  }, {
    grid: [
      [' ', 'O', ' '],
      ['O', 'X', 'O'],
      [' ', 'X', ' '],
    ]
  }, {
    grid: [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O'],
    ]
  }])('is invalid when count of Os is more than Xs', ({ grid }) => {
    expect(validTicTacToe(grid)).toEqual(false)
  })
  it.each<{ grid: Grid }>([{
    grid: [
      ['X', 'X', 'X'],
      ['O', 'O', 'O'],
      [' ', ' ', ' '],
    ]
  }, {
    grid: [
      ['X', 'O', ' '],
      ['X', 'O', ' '],
      ['X', 'O', ' '],
    ]
  }])('is invalid when there are two winners', ({ grid }) => {
    expect(validTicTacToe(grid)).toEqual(false)
  })
})
