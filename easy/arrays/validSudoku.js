/**
 * 
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.

 * @param {character[][]} board
 * @return {boolean}
 */
var validRows = function (board) {
  for (let i = 0; i < board.length; i++) {
    const map = {};
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == '.') {
        continue;
      }
      if (board[i][j] < 0 || board[i][j] > 9) {
        return false;
      }
      if (map[board[i][j]]) {
        return false;
      }
      map[board[i][j]] = true;
    }
  }
  return true;
};

var validColumns = function (board) {
  for (let i = 0; i < board.length; i++) {
    const map = {};
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] == '.') {
        continue;
      }
      if (board[j][i] < 0 || board[j][i] > 9) {
        return false;
      }
      if (map[board[j][i]]) {
        return false;
      }
      map[board[j][i]] = true;
    }
  }
  return true;
};

var validGrid = function (board, rowStart, colStart) {
  const map = {};
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (board[i][j] == '.') {
        continue;
      }
      if (board[i][j] < 0 || board[i][j] > 9) {
        return false;
      }
      if (map[board[i][j]]) {
        return false;
      }
      map[board[i][j]] = true;
    }
  }
  return true;
};

var isValidSudoku = function (board) {
  if (!validRows(board)) {
    return false;
  }

  if (!validColumns(board)) {
    return false;
  }

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      if (!validGrid(board, i, j)) {
        return false;
      }
    }
  }

  return true;
};
