type Mark = 'X' | 'O' | ' '
type Grid = [[Mark, Mark, Mark], [Mark, Mark, Mark], [Mark, Mark, Mark]]

export const validTicTacToe = (grid: Grid): boolean => {
  const Xs = count(grid, 'X')
  const Os = count(grid, 'O')
  return Xs === Os || Xs - 1 === Os
}

const count = (grid: Grid, mark: Mark) =>
  grid.flat().reduce((c, m) => m === mark ? c + 1 : c, 0)    
