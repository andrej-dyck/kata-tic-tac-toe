type Mark = 'X' | 'O' | ' '
export type Grid = [[Mark, Mark, Mark], [Mark, Mark, Mark], [Mark, Mark, Mark]]

export const validTicTacToe = (grid: Grid): boolean => {
  const Xs = count(grid, 'X')
  const Os = count(grid, 'O')

  const Xwon = isWinner(grid, 'X')
  const Owon = isWinner(grid, 'O')

  const oneXMoreThanOs = Xs - 1 === Os

  return Xwon ? !Owon && oneXMoreThanOs
    : Xs === Os || oneXMoreThanOs
}

const count = (grid: Grid, mark: Mark) =>
  grid.flat().reduce((c, m) => m === mark ? c + 1 : c, 0)

const isWinner = (grid: Grid, mark: Mark) =>
  fullRow(grid, mark) || fullColumn(grid, mark)

const fullRow = (grid: Grid, mark: Mark) =>
  grid.some(row => row.every(m => m === mark))

const fullColumn = (grid: Grid, mark: Mark) =>
  [0, 1, 2].some(colIndex => grid.every(row => row[colIndex] === mark))
