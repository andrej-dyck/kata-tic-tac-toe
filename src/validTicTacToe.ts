type Mark = 'X' | 'O' | ' '
type Grid = [[Mark, Mark, Mark],[Mark, Mark, Mark],[Mark, Mark, Mark]]

export const validTicTacToe = (grid: Grid): boolean =>
  !grid.flat().some(m => m === 'O')
